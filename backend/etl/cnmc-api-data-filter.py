from pyspark.sql import SparkSession
import os
from datetime import datetime, timedelta

# Create a Spark session
spark = SparkSession.builder \
    .appName("ReadCSV") \
    .config("spark.executor.memory", "10g") \
    .config("spark.driver.memory", "10g") \
    .getOrCreate()

# Folder where the CSV files are located
folder_path = "cnmc-api-data"

# Define the range of months
start_month = datetime.strptime("202204", "%Y%m")
end_month = datetime.strptime("202303", "%Y%m")

# Loop through each month in the range
current_month = start_month
while current_month <= end_month:
    # Construct file names
    file_suffix = current_month.strftime("%Y%m")
    file_consumos = os.path.join(folder_path, f"{file_suffix}_SIPS2_CONSUMOS_ELECTRICIDAD_peninsular.csv")
    file_ps = os.path.join(folder_path, f"{file_suffix}_SIPS2_PS_ELECTRICIDAD_peninsular.csv")
    
    # Read the CSV files into Spark DataFrames
    if os.path.exists(file_consumos) and os.path.exists(file_ps):
        df_c = spark.read \
            .option("header", "true") \
            .option("inferSchema", "true") \
            .csv(file_consumos)
        
        df_ps = spark.read \
            .option("header", "true") \
            .option("inferSchema", "true") \
            .csv(file_ps)
        
        # Dropping columns in df_ps that are also present in df_c
        columns_in_df_c = df_c.columns
        for column in columns_in_df_c:
            if column in df_ps.columns and column != 'cups':
                df_ps = df_ps.drop(column)

        # Join the filtered df_ps with df_c on the 'cups' column
        df = df_ps.join(df_c, on='cups', how='inner')

        # Filter the DataFrame where 'codigoProvinciaPS' is equal to 29
        df_malaga = df.filter(df.codigoProvinciaPS == 29)

        # Save the filtered DataFrame to a new CSV file
        csv_name = f"{file_suffix}_ELECTRICIDAD_MALAGA"
        df_malaga.coalesce(1).write.mode('overwrite').csv(csv_name, header=True)
        
    else:
        print(f"The files for {file_suffix} were not found in the folder '{folder_path}'.")

    # Move to the next month
    current_month = current_month + timedelta(days=31)
    current_month = current_month.replace(day=1)
