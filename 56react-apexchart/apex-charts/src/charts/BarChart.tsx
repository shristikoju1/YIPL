import ReactApexChart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

const BarChart = () => {
  const chartOptions: ApexOptions = {
    colors: ["#ff5733","#000", "#f6ff33"],
    chart: {
      type: "bar",


      animations: {
        enabled: true,
        easing: "easeinout",
        speed: 800,
        animateGradually: {
          enabled: true,
          delay: 150,
        },
        dynamicAnimation: {
          enabled: true,
          speed: 350,
        },
      },
    },
    plotOptions: {
      bar: {
        horizontal: true,
        barHeight: "70%",
        columnWidth: "50%",
        distributed: false,
        dataLabels: {
          position: "top",
        },
      },
    },
    legend: {
      position: "right",
    //   verticalAlign: "top",
      containerMargin: {
        left: 35,
        right: 60,
      },
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
    },
    responsive: [
      {
        breakpoint: 1000,
        options: {
          plotOptions: {
            bar: {
              horizontal: false,
            },
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  };

  const series = [
    {
      name: "series-1",
      data: [30, 40, 45, 50, 49, 60, 70, 91],
    },
    {
      name: "series-2",
      data: [30, 39, 43, 47, 55, 67, 70, 85],
    },
    {
        name: "series-3",
        data: [30, 39, 43, 47, 55, 67, 70, 85],
      },
  
  ];

  return (
    <div className="app flex bg-red-300">
      <div className="row">
        <div className="mixed-chart">
          <h1 className="text-red-500">Bar Chart</h1>
          <ReactApexChart
            options={chartOptions}
            series={series}
            type="bar"
            width="500"
          />
        </div>
      </div>
    </div>
  );
};

export default BarChart;
