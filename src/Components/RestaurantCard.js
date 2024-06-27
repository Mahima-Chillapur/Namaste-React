

const RestaurantCard=(props)=>{
    const {resData}=props
    //console.log(resData.name);
    const{ name,image, cuisines, delivery_time, avgRating,costForTwo,sla,cloudinaryImageId}= resData?.info
   
    return(
        <div className="res-card">
            <img className="restLogo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
            <h3>{name}</h3>
            {/* //src={image} */}
             <h4>{cuisines.join(",")}</h4>
            <h4>{avgRating}</h4>
            <h4>{sla.slaString}</h4>
            <h4>{costForTwo}</h4> 
        </div>
    )
}
export default RestaurantCard;