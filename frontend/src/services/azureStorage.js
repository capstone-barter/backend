const sasTokenOrUrl = process.env.NEXT_PUBLIC_AZURE_KPIS
console.log(sasTokenOrUrl)

export const downloadBlob = async () => {
  const response = await fetch(sasTokenOrUrl)

  if (!response.ok) {
    throw new Error(`Error downloading blob: ${response.statusText}`)
  }

  const data = await response.text()
  const jsonObjects = data.trim().split("\n")
  const parsedData = jsonObjects.map((json) => JSON.parse(json))
  return parsedData
}
