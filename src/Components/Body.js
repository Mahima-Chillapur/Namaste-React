import RestaurantCard from "./RestaurantCard"
import resList from "../Utils/mockData"
import { useEffect, useState } from "react"
import Shimmer from "./Shimmer"


const Body=()=>{
    //creating state variable
    const [listOfRestaurant,setListofRestaurant]=useState([])
    const [filteredRestaurant,setFilteredRestaurant]=useState([])
    const [searchText,setSearchText]=useState("")

    console.log("Body rendered");
    //whenever state variable updates react triggers a reconciliation cycle(re-renders everything )
    useEffect(()=>{
        console.log("useeffect is called");
        fetchData()
    },[])

const fetchData=async()=>{
    const data= await fetch(" https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&restaurantId=229&submitAction=ENTER")
    console.log("inside fetch");
    const json=await data.json()
    console.log(json);
    console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //optional chaining(? after every list)
    setListofRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    setFilteredRestaurant(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
}

    return listOfRestaurant.length===0 ?  (<Shimmer/>):
    (<div className="body">
        <div className="filter">
            <div className="search">
                <input type="text" className="search-box" value={searchText} onChange={(e)=>setSearchText(e.target.value)}/>
                <button onClick={()=>{
                    console.log(searchText);
                    
                    const filteredRest=listOfRestaurant.filter((rest)=>
                        rest.info.name.toLowerCase().includes(searchText)
                    )
                    console.log(filteredRest);
                    setFilteredRestaurant(filteredRest)
                }}>Search</button>
            </div>
            <button className="filter-btn" onClick={()=>{filteredList=listOfRestaurant.filter((res)=>res.rating>4)
                console.log(listOfRestaurant);
                setListofRestaurant(filteredList)
            }}>
                Top rated restaurants
                </button>
        </div>
        <div className="res-container">
            {
                filteredRestaurant.map(restaurant=><RestaurantCard key={restaurant.info.id}  resData={restaurant}/>)
                //key={restaurant.info.id} 
            }
        </div>

    </div>)
}
export default Body