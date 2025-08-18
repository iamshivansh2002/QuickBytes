import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Added Link import
import restaurantList from '../utils/mockData';
import RestaurantCard from '../components/RestaurantCard';
import Shimmer from './Shimmer';
import useOnline from '../utils/useOnline';

function filterData(searchText, restaurants) {
  return restaurants.filter((restaurant) =>
    restaurant.name.toLowerCase().includes(searchText.toLowerCase())
  );
}

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState('');

  // Simulate API call using useEffect
  useEffect(() => {
    setTimeout(() => {
      setAllRestaurants(restaurantList);
      setFilteredRestaurants(restaurantList);
    }, 100); // second shimmer effect
  }, []);

  ///FOR OFFLINE---------
  const isOnline = useOnline();
  if (!isOnline) {
    return (
      <div className="offline-container">
        <h1 className="offline-text">🔌You're offline</h1>
        <p className="offline-subtext">
          No internet connection detected — please check your network settings.
          📡
        </p>
      </div>
    );
  }

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="res-search">
        <input
          id="search"
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurants.length === 0 ? (
          <h2>No Restaurants Found</h2>
         ) : (
          filteredRestaurants.map((restaurant) => (
            <Link
              to={`/restaurant/${restaurant.id}`}
              key={restaurant.id}
              style={{ textDecoration: 'none' }}
            >
              <RestaurantCard resData={restaurant} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
