import React, { useState,useEffect } from "react";
export const Timer = ({timeout,onTimeout,mode}) => {
     useEffect(() => {
        console.log("SETTING TIME OUT");
        const timer = setTimeout(onTimeout,timeout);
        return () => {
            clearTimeout(timer);
        }
    
     },[onTimeout,timeout])//used at the time when the questions are completed
    const [remainingTime,setRemainingTime] = useState(timeout);
    useEffect(() => {
        console.log("SETTING INTERVAL");
        const interval = setInterval(() => {
            setRemainingTime((prevValue) => (prevValue-100))
        },100)
        return () => {
            clearInterval(interval);
        }
    },[]);//used for progressing the progess bar
    return (
        <progress id="question-time" max={timeout} 
        value={remainingTime}
        className={mode}
        />
    );
}