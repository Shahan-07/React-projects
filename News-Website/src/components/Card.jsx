import React from 'react'

const Card = ({data = []}) => {
    if(!Array.isArray(data)|| data.length === 0){
        return <p>No News Available</p>
    }
    
    const readMore =(url)=>{
        window.open(url)
    }

    return (
        <div className='cardContainer'>
            {data.map((currItem,index)=>{

                if(!currItem.urlToImage){
                    return null
                }else{
                    return(
                        <div className='card'>
                            <img src={currItem.urlToImage}/>
                            <div className='content'>
                                <a className='title' onClick={()=>window.open(currItem.url)}>{currItem.title}</a>
                                <p>{currItem.description}</p>
                                <button onClick={()=>window.open(currItem.url)}>Read More</button>
                            </div>
                        </div>
                    )
                }

            })}
        </div>
    )
}

export default Card
