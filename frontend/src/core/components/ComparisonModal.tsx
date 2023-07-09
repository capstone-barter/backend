import {
  faChevronDown,
  faChevronRight,
  faSquarePollVertical,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  ArcElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  Tooltip,
  registerables,
} from "chart.js"
import { useState } from "react"
import { Bar, Radar } from "react-chartjs-2"

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, ...registerables)

function ComparisonModal({ data, setCompareConsumption }) {
  console.log(data)
  const barChartInfo = [
    {
      label: "Avg. Consumption",
      sortingKey: "avg_consumption",
      unit: "Wh",
    },
    {
      label: "Avg. Size",
      sortingKey: "avg_superficie",
      unit: "sq. m",
    },
    {
      label: "Households per Cadastral Reference",
      sortingKey: "number_of_households",
      unit: "",
    },
    {
      label: "Avg. Participation",
      sortingKey: "avg_participation",
      unit: "",
    },
    {
      label: "Avg. Impagos",
      sortingKey: "avg_info_impagos",
      unit: "",
    },
    {
      label: "Avg. Bono Social",
      sortingKey: "avg_bono_social",
      unit: "",
    },
  ]

  const BarChart = ({ sortingKey, label, unit }) => {
    const [expandedChart, setExpandedChart] = useState(false)
    let sortedData
    if (sortingKey === "number_of_households") {
      sortedData = data
        .map((item) => ({
          ...item,
          computedValue: item.number_of_households / item.catastro_count,
        }))
        .sort((a, b) => b.computedValue - a.computedValue)
    } else {
      sortedData = data.sort((a, b) => b[sortingKey] - a[sortingKey])
    }
    const labels = sortedData.map((item) => item.codigoPostalPS)
    const chartData = {
      labels: labels,
      datasets: [
        {
          label: label,
          data: sortedData.map(
            (item) => item[sortingKey === "number_of_households" ? "computedValue" : sortingKey]
          ),
          backgroundColor: "rgb(149 110 171)",
        },
      ],
    }
    const chartOptions = {
      animation: {
        duration: 0, // Set the duration to 0 to disable animation
      },
      scales: {
        x: {
          type: "category",
        },
        y: {
          ticks: {
            callback: function (value) {
              return value + " " + unit // Add the desired unit here
            },
          },
        },
      },
    }
    return (
      <div
        className="barChart p-4 my-3 rounded cursor-pointer"
        style={{ backgroundColor: "#46006e14" }}
        onClick={() => setExpandedChart(!expandedChart)}
      >
        <div className="flex items-center">
          <FontAwesomeIcon
            icon={expandedChart ? faChevronDown : faChevronRight}
            className={`chevronIcon ${expandedChart ? "expanded" : ""}`}
            style={{ width: "25px" }}
          />
          <h2 className="pieHeading">{label}</h2>
        </div>
        {expandedChart && <Bar id={label} data={chartData} options={chartOptions} />}
      </div>
    )
  }

  const normalizeData = (data) => {
    const max = Math.max(...data)
    return data.map((value) => (value / max) * 100)
  }

  const RadarChart = () => {
    const [postcode1, setPostcode1] = useState("")
    const [postcode2, setPostcode2] = useState("")

    const postcodes = data.map((item) => item.codigoPostalPS)

    const attributeRanges = {
      avg_consumption: {
        min: Math.min(...data.map((item) => item.avg_consumption)),
        max: Math.max(...data.map((item) => item.avg_consumption)),
      },
      avg_superficie: {
        min: Math.min(...data.map((item) => item.avg_superficie)),
        max: Math.max(...data.map((item) => item.avg_superficie)),
      },
      avg_info_impagos: {
        min: Math.min(...data.map((item) => item.avg_info_impagos)),
        max: Math.max(...data.map((item) => item.avg_info_impagos)),
      },
      avg_bono_social: {
        min: Math.min(...data.map((item) => item.avg_bono_social)),
        max: Math.max(...data.map((item) => item.avg_bono_social)),
      },
    }

    const normalisedData = data.map((item) => {
      let normalisedItem = {
        codigoPostalPS: item.codigoPostalPS,
        data: [],
      }

      Object.keys(attributeRanges).forEach((attribute) => {
        const { min, max } = attributeRanges[attribute]
        const value = item[attribute]
        let normalisedValue
        if (attribute === "avg_info_impagos" || attribute === "avg_bono_social") {
          normalisedValue = 1 - (value - min) / (max - min)
        } else {
          normalisedValue = (value - min) / (max - min)
        }
        normalisedItem.data.push(normalisedValue)
      })

      return normalisedItem
    })

    const postcode1Data = normalisedData.find((item) => item.codigoPostalPS === postcode1)

    const postcode2Data = normalisedData.find((item) => item.codigoPostalPS === postcode2)

    const chartData = {
      labels: [
        "Avg. Consumption",
        "Avg. Size",
        // "Avg. Participation",
        "Avg. Bono Social (Inversed)",
        "Avg. Impagos (Inversed)",
      ],
      datasets: [
        {
          label: postcode1,
          data: postcode1Data?.data,
          backgroundColor: "#46006e8c",
        },
        {
          label: postcode2,
          data: postcode2Data?.data,
          backgroundColor: "#ff00747a",
        },
      ],
    }
    const chartOptions = {
      responsive: true,
      aspectRatio: 2,
      layout: {
        padding: 0,
      },
      plugins: {
        legend: {
          position: "right",
          labels: {
            font: {
              size: 14,
            },
          },
        },
      },
      scales: {
        r: {
          beginAtZero: true,
        },
      },
    }
    return (
      <div className="barChart p-4 my-3 rounded" style={{ backgroundColor: "#46006e14" }}>
        <div className="flex">
          <div className="mr-2">
            <label htmlFor="select1" className="block mb-1 text-sm font-medium text-gray-700">
              Select Postcode 1
            </label>
            <select
              id="select1"
              className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              value={postcode1}
              onChange={(e) => {
                setPostcode1(e.target.value)
              }}
            >
              <option value="">Select a postcode</option>
              {postcodes.map((postcode) => (
                <option key={postcode} value={postcode}>
                  {postcode}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="select2" className="block mb-1 text-sm font-medium text-gray-700">
              Select Postcode 2
            </label>
            <select
              id="select2"
              className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
              value={postcode2}
              onChange={(e) => {
                setPostcode2(e.target.value)
              }}
            >
              <option value="">Select a postcode</option>
              {postcodes.map((postcode) => (
                <option key={postcode} value={postcode}>
                  {postcode}
                </option>
              ))}
            </select>
          </div>
        </div>
        {postcode1Data && postcode2Data && (
          <div className="flex flex-col justify-center items-start w-full">
            <div className="w-full flex justify-center mt-6" style={{ height: "300px" }}>
              <Radar data={chartData} options={chartOptions} />
            </div>
            <ul className="text-left text-xs mt-2 mb-4 p-2 text-gray-500 list-disc list-inside">
              <li>
                This radar chart compares the normalised values of the selected postcodes across
                different attributes.
              </li>
              <li>
                The attributes Avg. Consumption and Avg. Size are directly normalised, while the
                attributes Avg. Bono Social and Avg. Impagos are inversed and then normalised.
              </li>
            </ul>
          </div>
        )}
        {(!postcode1Data || !postcode2Data) && (
          <p className="w-full mt-4 p-2 text-center text-gray-500">
            Select two postcodes above to view chart.
          </p>
        )}
      </div>
    )
  }

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center z-50">
      <div class="relative w-full max-w-4xl max-h-full">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
          <button
            type="button"
            class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
            data-modal-hide="popup-modal"
            onClick={() => setCompareConsumption(false)}
          >
            <svg
              class="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">Close modal</span>
          </button>
          <div class="p-6 text-left">
            <h3 class="mb-4 text-2xl font-medium text-gray-900 dark:text-white">
              <FontAwesomeIcon
                icon={faSquarePollVertical}
                style={{ fontSize: "24px", marginRight: "0.5rem" }}
              />
              Compare Postcodes
            </h3>
            <div style={{ overflowY: "scroll", height: "500px" }}>
              <RadarChart />
              {barChartInfo.map((info) => {
                return (
                  <BarChart
                    key={info.sortingKey + "_chart"}
                    sortingKey={info.sortingKey}
                    label={info.label}
                    unit={info.unit}
                  />
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComparisonModal
