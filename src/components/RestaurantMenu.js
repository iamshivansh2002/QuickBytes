import { useParams } from 'react-router-dom';
import { useState } from 'react';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import ShimmerMenu from './ShimmerMenu';
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = useRestaurantMenu(resId);
  const dispatch = useDispatch();

  // Track which items have been recently added
  const [addedItems, setAddedItems] = useState({});

  const addFoodItem = (item) => {
    dispatch(addItem(item));

    setAddedItems((prev) => ({ ...prev, [item.id]: true }));

    // Reset after 1 second
    setTimeout(() => {
      setAddedItems((prev) => ({ ...prev, [item.id]: false }));
    }, 1000);
  };

  if (!restaurant) return <ShimmerMenu />;

  const { name, deliveryTime, price, menu, rating, image, receipe } = restaurant;

  return (
    <div className="res-details">
      <div className="res-card">
        <img src={image} alt={name} className="res-main-img" />
        <div className="res-card-text">
          <h1 className="res-name">{name}</h1>
          <p className="res-rating">⭐ {rating}</p>
          <p className="res-description">📝 {receipe}</p>
          <p className="res-delivery">🕗 {deliveryTime}</p>
          <p className="res-price">💵 {price}</p>
        </div>
      </div>

      <h2 className="menu-title">Menu ({menu.length})</h2>

      <ul className="menu-list">
        {menu.map((item) => (
          <li key={item.id} className="menu-item">
            <img src={item.image} alt={item.name} className="menu-item-img" />
            <div className="menu-item-text">
              <span>{item.name}</span>
              <p>{item.price}</p>
            </div>
            <button
              className={`add-btn ${addedItems[item.id] ? 'clicked' : ''}`}
              onClick={() => addFoodItem(item)}
            >
              {addedItems[item.id] ? '✓ Added' : 'Add +'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;

