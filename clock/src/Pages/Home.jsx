import Clock from "@/Components/Clock"
import './Home.scss'

const Home = () => {
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