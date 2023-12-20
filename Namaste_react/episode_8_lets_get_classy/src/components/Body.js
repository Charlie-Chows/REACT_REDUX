import RestaurantCard from "./Restaurantcard";
import { useEffect, useState } from "react";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";

const Body = () => {
    // it will also a render the default data
  const [listOfRestaurants,setListOfRestaurants] = useState([]);
  const[filteredRestaurant,setFilteredRestaurant] = useState([]);
  const [searchText,setSearchText] = useState("");

  useEffect(()=>{
    fetchData();
  },[]);

  const fetchData = async()=>{
    const data =await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    // This setListOfRestaurants can re-render the BODY component with new data ( restaurant cards )
    // OPTIONAL CHAINING
    setListOfRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };

  // CONDITIONAL RENDERING
    return listOfRestaurants.length === 0 ? <ShimmerUI /> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                  <input type="text" className="search-box" value = {searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                  <button onClick={()=>{
                  console.log(searchText);
                  const filteredList = listOfRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                  setFilteredRestaurant(filteredList);
                  }}>Search</button>
                </div>

              {/* Filter Button Logic ( TOP RATED RESTAURANTS) */}
                <button className="filter-btn" onClick={()=>{
                  const filteredList = listOfRestaurants.filter((res)=>res.info.avgRating > 4)
                  setListOfRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
            </div>

            <div className="res-container">
              {/* LOGIC TO DISPLAY CARDS IN BODY  */}
               {filteredRestaurant.map((resPointer)=> (<Link key={resPointer.info.id} to={"/restaurants/" + resPointer.info.id}><RestaurantCard resData={resPointer}/></Link>))};
            </div>
        </div>
    );
}

export default Body;