import { Link } from "react-router-dom"

const Homepage = () => {
  return (
    <div className="flex flex-col">
      <Link to={'/bar-chart'}>Bar Chart</Link>
      <Link to={'/line-chart'}>Line Chart</Link>
      <Link to={'/donut-chart'}>Donut Chart</Link>
    </div>
  )
}

export default Homepage