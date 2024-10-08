import ReactApexChart from 'react-apexcharts'

const DonutChart = () => {
    const chartOptions = {
        chart: {
            type: 'donut',
        },
        series: [44, 55, 41, 17, 15],
        labels: ['A', 'B', 'C', 'D', 'E']

    }
  return (
    <div>
        <ReactApexChart
            options={chartOptions}
            series={chartOptions.series}
            type="donut"
            height={350}
            width={350}
        />
    </div>
  )
}

export default DonutChart