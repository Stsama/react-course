import React, {useState, useEffect} from 'react'

const DigitalClock = () => {

    const [time, setTime] = useState(new Date())

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date())
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    function formatTime() {
        let hours = time.getHours() 
        const minutes = time.getMinutes()
        const seconds = time.getSeconds()
        const meridiem = time.getHours()

        hours = hours % 12 || 12
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridiem}`
    }

    const padZero = (num) => {
        return num < 10 ? '0' + num : num
    }

  return (
    <div className='clock-container'>
        <div className="clock">
            <span>{formatTime()}</span>
        </div>
    </div>
  )
}

export default DigitalClock