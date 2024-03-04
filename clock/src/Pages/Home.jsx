import axios from "axios"
import Clock from "@/Components/Clock"
import './Home.scss'
import { useEffect } from "react"

const Home = () => {

  useEffect(() => {
    const currentDate = new Date().toLocaleString()
    axios.post('https://backend-json-files.onrender.com/api/data', {
      local_date: currentDate
    })
  }, [])

  return (
    <div className="page-container">
      <h1>Tu Reloj</h1>

      <div className="clock-container">
        <h2>Hora actual</h2>
        <Clock />
      </div>

      <div className="clock-container">
        <h2>Hora dentro de 30 minutos</h2>
        <Clock delayTime={30 * 60 * 1000} />
      </div>

    </div>

  )
}

export default Home