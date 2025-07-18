import React, { useEffect, useRef, useState } from 'react'
import data from './data.json'

const Slider = () => {

    const [next , setNext] = useState(0);
    let ref = useRef(null);

    const handleNext = ()=>{
        setNext((prevValue)=>{
            if(prevValue == data.length - 1){
                return 0;
            }
            return prevValue + 1;
        })
    }

    const  handleprev = ()=>{
        if (next == 0){
            setNext(data.length -1)
        } else{
            setNext(next -1)
        }
    }

    useEffect(()=>{
        ref.current = setInterval(handleNext,1000);
        return (()=>{
            clearInterval(ref.current)
        })

    },[])

    return (
        <div className='container' onMouseEnter={()=> clearInterval(ref.current)} onMouseLeave={()=>ref.current = setInterval(handleNext,1000)}>
            <div className='left-btn'>
                <button onClick={handleprev}>{"<"}</button>
            </div>

            <img src={data[next].download_url} alt="image" />

            <div className='right-btn'>
                <button onClick={handleNext}>{">"}</button>
            </div>
        </div>
    )
}

export default Slider
