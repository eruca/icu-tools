const echarts = require("../../components/ec-canvas/echarts");

export function setChartData(chart: any, data: Array<any>) {
  let option = {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        textStyle: {
          color: "#fff"
        }
      }
    },
    grid: {
      borderWidth: 0,
      top: 110,
      bottom: 95,
      textStyle: {
        color: "#fff"
      }
    },
    dataZoom: [
      {
        type: "slider",
        start: 0,
        end: 40,
        show: true
      },
      {
        type: "inside",
        start: 0,
        end: 40,
        filterMode: "filter"
      }
    ],
    xAxis: [
      {
        type: "time",
        axisLine: {
          lineStyle: {
            color: "#90979c"
          }
        },
        splitLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        splitArea: {
          show: false
        },
        axisLabel: {
          interval: 0
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        splitLine: {
          show: false
        },
        axisLine: {
          lineStyle: {
            color: "#90979c"
          }
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          interval: 0
        },
        splitArea: {
          show: false
        }
      }
    ],
    series: [
      {
        name: "GCS分数",
        type: "line",
        // stack: "总量",
        // barWidth: 10,
        label: {
          normal: {
            show: false,
            position: "top",
            color: "#000"
          }
        },
        itemStyle: {
          normal: {
            barBorderRadius: 20,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#00cefc"
              },
              {
                offset: 1,
                color: "#00cefc"
              }
            ])
          }
        },
        data: data
      }
    ]
  };
  chart.setOption(option);
}
