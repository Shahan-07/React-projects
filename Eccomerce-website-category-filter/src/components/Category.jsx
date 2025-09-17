import React, { useState } from 'react'
import Navbar from './Navbar'
import { AllData } from './Datas'

const Category = () => {

    const [data , setData] = useState(AllData);
    const [inputval, setinputVal] = useState("")

    const selectItem = (e)=>{
        setinputVal(e.target.value);
    }


    if(inputval == "Product A to Z"){
        data.sort((a,b)=>{
            let nameA = a.name;
            let nameB = b.name;

            if(nameA < nameB){
                return -1;
            }
        })

    }

    if(inputval == "Product Z to A"){
        data.sort((a,b)=>{
            let nameA = a.name;
            let nameB = b.name;

            if(nameA > nameB){
                return -1;
            }
        })

    }

    if(inputval == "price High to Low"){
        data.sort((a,b)=>{
            return b.price - a.price
        })
    }

    if(inputval == "price Low to High"){
        data.sort((a,b)=>{
            return a.price - b.price
        })
    }

    return (
        <div className='container'>
            <Navbar />

            <div className='category'>
                <div>
                <label>Category : </label>
                <select id='select' onChange={selectItem}>
                    <option value="Product A to Z">Product A to Z</option>
                    <option value="Product Z to A">Product Z to A</option>
                    <option value="price High to Low">price High to Low</option>
                    <option value="price Low to High">price Low to High</option>
                </select>
                </div>
            </div>

            <div className='product'>
                {
                    data.map((curr)=>{
                        return(
                            <div className='card'>
                                <img src={curr.img} />
                                <div className='text'>
                                    <p>Model : {curr.name}</p>
                                    <p>price : {curr.price}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Category
