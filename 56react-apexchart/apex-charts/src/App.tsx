import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './layout/MainLayout'
import Homepage from './components/Homepage'
import BarChart from './charts/BarChart'
import LineChart from './charts/LineChart'
import DonutChart from './charts/DonutChart'

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Homepage />} />
            <Route path='/bar-chart' element={<BarChart/>} />
            <Route path='/line-chart' element={<LineChart/>} />
            <Route path='/donut-chart' element={<DonutChart/>} />
          </Route>
        </Routes>
      </Router>
    </div>
  )
}

export default App
