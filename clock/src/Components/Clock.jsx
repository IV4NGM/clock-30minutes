import { useEffect, useState } from "react"
import './Clock.scss'

// eslint-disable-next-line react/prop-types
const Clock = ({ delayTime = 0 }) => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 500);

    return () => clearInterval(intervalId);
  }, [])
  // Add the specified time to current time.
  const updatedTime = new Date(currentTime.getTime() + delayTime)

  const hour = updatedTime.getHours() % 12 || 12
  const minutes = updatedTime.getMinutes().toString().padStart(2, '0');
  const seconds = updatedTime.getSeconds().toString().padStart(2, '0');
  const ampm = updatedTime.getHours() >= 12 ? 'pm' : 'am'

  return (
    <div className="clock">
      <div className="number-container">
        <p className="time">{hour}</p>
      </div>
      <div className="number-container">
        <p className="time">{minutes}</p>
      </div>
      <div className="number-container">
        <p className="time">{seconds}</p>
      </div>
      <div className="number-container number-container-right">
        <p className="ampm">{ampm}</p>
      </div>
    </div>
  )
}

export default Clock