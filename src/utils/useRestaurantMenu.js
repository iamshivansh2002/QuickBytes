///custom hook///--------------------------------------

import { useState, useEffect } from "react";
import restaurantList from "./mockData"; 

const useRestaurantMenu = (resId) => {
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      const selectedRestaurant = restaurantList.find((res) => res.id === resId);
      setRestaurant(selectedRestaurant);
    }, 300);

    return () => clearTimeout(timer);
  }, [resId]);

  return restaurant;
};

export default useRestaurantMenu;
