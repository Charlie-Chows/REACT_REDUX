import RestaurantCard from "./Restaurantcard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
    // it will also a render the default data
  const [listOfRestaurants,setListOfRestaurants] = useState(resList)

    return (
        <div className="body">
            <div className="filter">
              {/* Filter Button Logic ( TOP RATED RESTAURANTS) */}
                <button className="filter-btn" onClick={()=>{
                  const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating > 4)
                  setListOfRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
            </div>

            <div className="res-container">
              {/* LOGIC TO DISPLAY CARDS IN BODY  */}
               {listOfRestaurants.map((resPointer)=> (<RestaurantCard key={resPointer.info.id} resData={resPointer}/>))};
            </div>
        </div>
    );
}

export default Body;