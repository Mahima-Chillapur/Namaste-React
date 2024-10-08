import { useEffect, useState } from "react";
import Shimmer from "./Shimmer"
import { useParams } from "react-router-dom";
import {Menu_URL} from "../Utils/constants"

const RestaurantMenu=()=>{

    const [resInfo, setRestInfo]=useState(null)
    const {resId}=useParams()
    
    console.log(resId);
    
    useEffect(()=>{
        fetchMenu()
    },[])


    const fetchMenu=async()=>{
        const data=await fetch(Menu_URL+resId)
            
            // "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9352403&lng=77.624532&restaurantId="+resId)
        //console.log(data);
        const json=await data.json()
        setRestInfo(json.data)
        console.log(json);
        
        
    }

    if(resInfo===null) return <Shimmer/>

    const {name,cuisines,costForTwoMessage,}=resInfo?.cards[2]?.card?.card?.info

    const{itemCards}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card

    console.log(itemCards);
    

    return (
        <div className="menu">
            {/* <h1>Menu Cards</h1> */}
            <h1>{name}</h1> 
             <h3>{cuisines.join(",")} - {costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {itemCards.map(item=><li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price/100}</li>)}
                
            </ul>
        </div>
    )
    


    //     return (
    //         <div className="menu">
    //             <h1>{name}</h1>
    //             <p>{cuisines.join(",")} - {costForTwoMessage} </p>
    //             <h2>Menu</h2>
    //             <ul>
    //                 {itemCards.map((item)=><li key={item.card.info.id}>{item.card.info.name}-Rs.{item.card.info.defaultPrice || item.card.info.price }</li>)}
                    
    //                 <li>burger</li>
    //                 <li>cooldrinks</li>
    //                 <li>Biriyani</li>
    //             </ul>
    //         </div>
    //     )
}

export default RestaurantMenu;