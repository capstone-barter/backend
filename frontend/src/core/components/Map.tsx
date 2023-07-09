import {
  faAreaChart,
  faBolt,
  faBuildingUser,
  faHandHoldingDollar,
  faHandshake,
  faHome,
  faLightbulb,
  faMoneyBillWave,
  faSquarePollVertical,
  faTimes,
} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import mapboxgl from "mapbox-gl"
import polyData from "public/malagaZipPolyBorder.geojson"
import { useEffect, useState } from "react"
import { downloadBlob } from "src/services/azureStorage.js"

import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js"
import { Pie } from "react-chartjs-2"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ComparisonModal from "./ComparisonModal"
ChartJS.register(ArcElement, Tooltip, Legend)

// Mapbox access token
mapboxgl.accessToken = process.env.NEXT_PUBLIC_MAPBOX_TOKEN

const Map = () => {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState<any>(true)
  const [sidebarInfo, setSidebarInfo] = useState<any>(null)
  const [catastroChartData, setCatastroChartData] = useState<any>({})
  const [tariffsChartData, setTariffsChartData] = useState<any>({})
  const [cnaeChartData, setCnaeChartData] = useState<any>({})
  const [tipoPerfilChartData, setTipoPerfilChartData] = useState<any>({})
  const [globalMap, setGlobalMap] = useState<any>(null)
  const [onlyPostcodesWData, setOnlyPostcodesWData] = useState<any>(false)
  const [compareConsumption, setCompareConsumption] = useState<any>(false)
  const [activePostCode, setActivePostCode] = useState<any>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonData = await downloadBlob()
        setData(jsonData as any)
        setLoading(false)
      } catch (error) {
        console.error("Error fetching data:", error)
        setLoading(false)
      }
    }

    fetchData()
      .then(() => console.log("Data Fetched"))
      .catch((e) => console.log(e))
  }, [])

  useEffect(() => {
    if (loading) {
      return
    }
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/streets-v12",
      center: [-4.4214, 36.7213], // starting position [lng, lat] to center on malaga
      zoom: 12, // starting zoom
    })
    setGlobalMap(map)

    map.on("style.load", () => {
      // Use imported geoJSON data directly
      const geojsonURL = polyData
      // const geojsonURL = "public/malagaZipPolyBorder.geojson"

      // Make sure data has loaded correctly
      if (geojsonURL) {
        map.addSource("polygon", {
          type: "geojson",
          data: geojsonURL,
          generateId: true,
        })

        const postcode_w_data = Object.values(data).map((d) => parseInt(d.codigoPostalPS))

        let postcodeDataFilter = onlyPostcodesWData
          ? ["in", "NUMDPOSTAL", ...postcode_w_data]
          : ["all"]

        // Add fill layer for polygon
        map.addLayer({
          id: "polygon-fill",
          type: "fill",
          source: "polygon",
          layout: {},
          paint: {
            "fill-color": [
              "case",
              ["boolean", ["feature-state", "hover"], false],
              "#ff0074", // Color for hovered features
              "#46006e", // Color for non-hovered features
            ],
            "fill-opacity": 0.2,
          },

          filter: postcodeDataFilter,
        })

        map.addLayer({
          id: "polygon-outline",
          type: "line",
          source: "polygon",
          layout: {},
          paint: {
            "line-color": "#46006e",
            "line-width": 1.5,
          },
          filter: postcodeDataFilter,
        })

        // Create a popup, but don't add it to the map yet.
        const popup = new mapboxgl.Popup({
          closeButton: false,
          closeOnClick: false,
          className: "popup",
        })
        // const overlay = document.getElementById("map-overlay");
        var activePostcode = null
        let hoveredFeatureId = null

        const options = {
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "Catastro Data Pie Chart",
          },
          plugins: {
            datalabels: {
              color: "#fff",
              font: {
                weight: "bold",
                size: 12,
              },
            },
          },
        }

        map.on("mouseenter", "polygon-fill", () => {
          map.getCanvas().style.cursor = "pointer"
        })

        // // Remove the hover effect when the mouse pointer leaves the area
        map.on("mouseleave", "polygon-fill", () => {
          map.getCanvas().style.cursor = ""
          setActivePostCode(null)
          popup.remove()
        })

        map.on("click", "polygon-fill", function (e) {
          setSidebar(e, map)
        })

        // Event handler for mousemove event on the map
        map.on("mousemove", function (e) {
          var features = map.queryRenderedFeatures(e.point)
          if (!features[0]) {
            return
          }

          const featureId = features[0].id

          // Only update the style if the hovered feature has changed
          if (featureId !== hoveredFeatureId) {
            // Reset the style of the previously hovered feature if any
            if (hoveredFeatureId) {
              map.setFeatureState({ source: "polygon", id: hoveredFeatureId }, { hover: false })
            }

            // Update the style of the currently hovered f eature
            map.setFeatureState({ source: "polygon", id: featureId }, { hover: true })

            // Update the hoveredFeatureId variable
            hoveredFeatureId = featureId
          }

          var hoveredFeature = features[0]
          // Get the postcode property
          var postcode = hoveredFeature.properties.NUMDPOSTAL
          if (postcode !== undefined) {
            popup.setLngLat(e.lngLat)

            if (postcode !== activePostcode) {
              setActivePostCode(postcode)
              popup.setHTML(getPostcodeHTML(postcode)).addTo(map)
              activePostcode = postcode
            }
          }
        })
      } else {
        console.error("Issue with loading geoJSON data")
      }
    })

    // Cleanup map instance on component unmount
    return () => map.remove()
  }, [loading, onlyPostcodesWData])

  function updatePieCharts(info) {
    setTariffsChartData(getPieChartData("tariffs_", info))
    setCnaeChartData(getPieChartData("group_cnae_", info))
    setCatastroChartData(getPieChartData("catastro_", info))
    setTipoPerfilChartData(getPieChartData("tipoPerfilConsumo_", info))
  }

  function getPieChartData(type, info) {
    const keys = Object.keys(info).filter(
      (key) => key.startsWith(type) && key !== "catastro_count" && info[key] !== 0
    )

    // Extract the corresponding values
    const values = keys.map((key) => info[key])
    return {
      labels: keys.map((key) => key.replace(type, "")),
      datasets: [
        {
          data: values,
          backgroundColor: [
            "#ff6384",
            "#36a2eb",
            "#ffce56",
            "#800080",
            "#FF69B4",
            "#32cd32",
            "#9370db",
            "#00ced1",
            "#ff8c00",
            "#8a2be2",
          ],
        },
      ],
    }
  }

  function getPostcodeHTML(postcode) {
    if (data) {
      const postcode_data =
        data.find((item) => parseInt(item.codigoPostalPS) === parseInt(postcode)) || null
      if (postcode_data) {
        return `<h1>${postcode_data.codigoPostalPS}</h1><p>Count of Catastros: ${postcode_data.catastro_count}</p>`
      } else {
        return `<h1>${postcode}</h1><p>No data for this postcode</p>`
      }
    }
  }

  function closeSidebar(map) {
    const elem = document.getElementById("sidebar")
    if (!elem) {
      return
    }
    const collapsed = elem.classList.add("collapsed")
    const padding = {}
    padding["sidebar"] = collapsed ? 0 : 300 // 0 if collapsed, 300 px if not. This matches the width of the sidebars in the .sidebar CSS class.
    map.easeTo({
      padding: padding,
      duration: 1000, // In ms. This matches the CSS transition duration property.
    })
  }

  function openSidebar(map) {
    const elem = document.getElementById("sidebar")
    if (!elem) {
      return
    }
    const collapsed = elem.classList.remove("collapsed")
    const padding = {}
    padding["sidebar"] = collapsed ? 0 : 300 // 0 if collapsed, 300 px if not. This matches the width of the sidebars in the .sidebar CSS class.
    map.easeTo({
      padding: padding,
      duration: 1000, // In ms. This matches the CSS transition duration property.
    })
  }

  function getSidebarPostcodeInfo(postcode) {
    if (data) {
      return data.find((item) => parseInt(item.codigoPostalPS) === parseInt(postcode)) || null
    }
  }

  function setSidebar(e, map) {
    var features = map.queryRenderedFeatures(e.point)
    var postcode = features[0].properties.NUMDPOSTAL

    const info = getSidebarPostcodeInfo(postcode, map)
    setSidebarInfo(info)
    if (info !== null) {
      updatePieCharts(info)
    }
    if (info === null) {
      closeSidebar(map)
      toast.info("No data for this postcode.", {
        position: "bottom-center",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "colored",
      })
    } else {
      openSidebar(map)
    }
  }
  const chartOptions = {
    animation: {
      duration: 0,
    },
    plugins: {
      legend: {
        position: "right",
      },
    },
    maintainAspectRatio: false,
  }

  const pieCharts = [
    {
      title: "Catastro Types",
      data: catastroChartData,
    },
    {
      title: "CNAE Types",
      data: cnaeChartData,
    },
    {
      title: "Tariff Types",
      data: tariffsChartData,
    },
    {
      title: "Profile Types",
      data: tipoPerfilChartData,
    },
  ]

  const PieChartBox = ({ title, data }) => {
    return (
      <div className="pieChartBox">
        <h2 className="pieHeading">{title}</h2>
        <Pie data={data} options={chartOptions} />
      </div>
    )
  }

  // Define the KPI data
  const kpiData =
    sidebarInfo !== null
      ? [
          {
            icon: faLightbulb,
            label: "CUPS Records",
            value: sidebarInfo.cups_count,
          },
          {
            icon: faHome,
            label: "Cadastral Records",
            value: sidebarInfo.catastro_count,
          },
          {
            icon: faBuildingUser,
            label: "Households per Cadastral Record",
            value: (sidebarInfo.number_of_households / sidebarInfo.catastro_count).toFixed(0),
          },
          {
            icon: faBolt,
            label: "Avg. Consumption (Wh)",
            value: sidebarInfo.avg_consumption?.toFixed(0) || "No data",
          },
          {
            icon: faAreaChart,
            label: "Avg. Surface Area (sq. m)",
            value: sidebarInfo.avg_superficie?.toFixed(2) || "No data",
          },
          {
            icon: faMoneyBillWave,
            label: "Avg. Payment Default (%)",
            value: sidebarInfo.avg_info_impagos?.toFixed(2) || "No data",
          },

          {
            icon: faHandHoldingDollar,
            label: "Avg. Social Bonus (%)",
            value: sidebarInfo.avg_bono_social?.toFixed(2) || "No data",
          },
          {
            icon: faHandshake,
            label: "Avg. Participation (%)",
            value: sidebarInfo.avg_participation?.toFixed(2) || "No data",
          },
        ]
      : []

  return (
    <>
      {!loading && (
        <>
          <div
            className="py-2 px-4 m-4 absolute bg-white rounded-full top-15"
            style={{ zIndex: 2 }}
          >
            <label className="inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-purple-600"
                checked={onlyPostcodesWData}
                onChange={(e) => setOnlyPostcodesWData(e.target.checked)}
              />
              <span className="ml-2 text-gray-700">Only Show Postcodes with Data</span>
            </label>
          </div>
          {compareConsumption && (
            <ComparisonModal data={data} setCompareConsumption={setCompareConsumption} />
          )}
          <div
            className="py-2 px-4 m-4 absolute bg-white rounded-full top-15 right-0"
            style={{ zIndex: 1 }}
            onClick={() => setCompareConsumption(!compareConsumption)}
          >
            <FontAwesomeIcon icon={faSquarePollVertical} style={{ fontSize: "24px" }} />
            <label className="inline-flex items-center cursor-pointer">
              <span className="ml-2 text-gray-700">Compare Postcodes</span>
            </label>
          </div>

          <div
            id="map"
            style={{
              width: "100%",
              height: "100%",
            }}
          >
            <div id="sidebar" className="sidebar flex-center right collapsed z-10">
              <div className="closeButtonContainer">
                <FontAwesomeIcon
                  icon={faTimes}
                  className="closeButton"
                  onClick={() => closeSidebar(globalMap)}
                />
              </div>
              {sidebarInfo && (
                <div className="sidebar-content rounded-rect flex-center">
                  <div
                    style={{
                      textAlign: "left",
                      width: "100%",
                      paddingBottom: "1rem",
                    }}
                  >
                    <h1
                      style={{
                        fontWeight: 600,
                        fontSize: "24px",
                        paddingBottom: "0.5rem",
                      }}
                    >
                      Postal Code {sidebarInfo.codigoPostalPS}
                    </h1>
                    <p>Málaga, Spain</p>
                  </div>

                  <div
                    style={{
                      height: "100%",
                      width: "100%",
                      overflowY: "scroll",
                    }}
                  >
                    <div className="kpiBox">
                      {kpiData.map((kpi, index) => (
                        <div className="kpiItem w-1/2" key={index}>
                          <FontAwesomeIcon icon={kpi.icon} className="kpiIcon" />
                          <p className="kpiLabel">{kpi.label}</p>
                          <p className="kpiValue">{kpi.value}</p>
                        </div>
                      ))}
                    </div>

                    {pieCharts.map((chart, index) => (
                      <PieChartBox key={index} title={chart.title} data={chart.data} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <ToastContainer />
          {activePostCode && (
            <div id="map-overlay" className="map-overlay whitespace-nowrap">
              Postal Code: <p className="whitespace-nowrap font-bold m-0">{activePostCode}</p>
            </div>
          )}
        </>
      )}
    </>
  )
}

export default Map
