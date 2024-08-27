import React, {useState, useEffect, useRef} from 'react'

const StopWatch = () => {
    const [isRunning, setIsRunning] = useState(false);
    const [elapsedTime, setElapsedTime] = useState(0);
    const intervalRef = useRef(null);
    const startTimeRef = useRef(0);
    useEffect(() => {
        if(isRunning) {
            intervalRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTimeRef.current);
            }, 10);
        }

        return () => {
            clearInterval(intervalRef.current);
        };

    }, [isRunning]);

    const start = () => {
        setIsRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;

    };
    const stop = () => {
        setIsRunning(false);
    };
    const reset = () => {
        setIsRunning(false);
        setElapsedTime(0);
    };

    const formatTime = () => {
        let hour = Math.floor(elapsedTime / 3600000);
        let minute = Math.floor((elapsedTime % 3600000) / 60000);
        let second = Math.floor((elapsedTime % 60000) / 1000);
        let centisecond = Math.floor((elapsedTime % 1000) / 10);
        
        hour = String(hour).padStart(2, '0');
        minute = String(minute).padStart(2, '0');
        second = String(second).padStart(2, '0');
        centisecond = String(centisecond).padStart(2, '0');
        return `${minute}:${second}:${centisecond}`;
    };


  return (
    <div className='stopwatch'>
        <div className="display">{formatTime()} </div>
        <div className="controls">
            <button className='start-button' onClick={start}>Start</button>
            <button className='stop-button' onClick={stop}>Stop</button>
            <button className='reset-button' onClick={reset}>Reset</button>
        </div>
    </div>
  ) 
}

export default StopWatch