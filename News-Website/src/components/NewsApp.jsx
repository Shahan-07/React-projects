import React, { useEffect, useState } from "react";
import Card from "./Card";

const NewsApp = () => {
    const [search ,setSearch] = useState("IT");
    const [newsData,setNewsData] = useState([]);
    const API_KEY = "ee795fd156a74e96b26df167956041d7"

    const getData = async ()=>{
        const response = await fetch( `https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`)
        const JsonData = await response.json();
        console.log(JsonData.articles);
        setNewsData(JsonData.articles);
        
    }

    useEffect(()=>{
        getData()
    },[])

    const userInput =(e)=>{
        setSearch(e.target.value)
    }

    const handleInput =(e)=>{
        setSearch(e.target.value)
    }

    return (
        <div>
        <nav>
            <div>
            <h1>Trendy News</h1>
            </div>

            <ul>
            <a>All News</a>
            <a>Trending</a>
            </ul>

            <div className="searchBar">
            <input type="text" placeholder="Search News" value={search}  onChange={handleInput}/>
            <button onClick={getData}>Search</button>
            </div>
        </nav>

        <div>
            <p className="head">Stay updated with trendy News!</p>
        </div>
        <div className="categoryBtn">
            <button onClick={userInput} value="sports">Sports</button>
            <button onClick={userInput} value="politics">Politcs</button>
            <button onClick={userInput} value="Entertainment">Entertainment</button>
            <button onClick={userInput} value="health">Health</button>
            <button onClick={userInput} value="fitness">Fitness</button>
        </div>

        <div>
            {newsData? <Card data={newsData}/> : null}
            
        </div>
        </div>
    );
    };

export default NewsApp;
