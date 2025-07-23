import React, { useCallback, useEffect, useRef, useState } from 'react'
import {ClipLoader} from 'react-spinners'

const infiniteScroll = () => {
    const [data , setData] = useState([]);
    const [loading , setLoading] = useState(false);
    const [page , setPage] = useState(2);


    const loaderRef = useRef()

    const getData = async(page)=>{
        try{
            const url = `https://picsum.photos/v2/list?page=${page}&limit=10`
            const response = await fetch(url);
            const data = await response.json();
            return data

        } catch(err){
            console.log(err);
        }

    }

    const loadMore = useCallback(async()=>{
        if(loading)
            return
        setLoading(true)
        const datas = await getData(page)
        setData((prevData)=>[...prevData, ...datas])
        setTimeout(() => {
            setLoading(false)
        }, 4000);
        setPage((prevPage)=>prevPage+1)
    },[page,loading])

    useEffect(()=>{
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0]
            if(entry.isIntersecting){
                loadMore()
            }
        })

        if(loaderRef.current){
            observer.observe(loaderRef.current)
        }

        return ()=>{
            if(loaderRef.current){
                observer.unobserve(loaderRef.current)
            }
        }

    },[])

    const firstPage = async()=>{
        const datas = await getData(1)
        console.log(datas);
        setData(datas);
        
}
    useEffect(()=>{
        firstPage();
    })



    return (
        <div>
            <div className='images'>
                {data? data.map((currItem, index)=>{
                    return (
                        <div key={index}>
                            <img src={currItem.download_url} alt="" />
                        </div>
                    )
                }): ''}
            </div>

            <div ref={loaderRef}>{loading? <ClipLoader loading={true} color="blue" size="40px"/> : ''}</div>

        </div>
    )
}

export default infiniteScroll
