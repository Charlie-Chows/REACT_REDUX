import RestaurantCard from "./Restaurantcard";
import resList from "../utils/mockData";

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
               {resList.map((resPointer)=> (<RestaurantCard key={resPointer.info.id} resData={resPointer}/>))};
            </div>
        </div>
    );
}

export default Body;