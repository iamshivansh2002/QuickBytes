const RestaurantCard = (props) => {
  const { resData } = props;
  const { image, name, receipe, rating, deliveryTime, price } = resData;

  return (
    <div className="card">
      <img className="res-logo" src={image} alt={name} />
      <h2>{name}</h2>
      <h5>{receipe}</h5>
      <span>
        <h4
          style={
            parseFloat(rating) < 4
              ? { backgroundColor: "red", color: "white" }
              : { color: "green" }
          }
        >
          ⭐ {rating}
        </h4>
        <h4>{deliveryTime}</h4>
        <h4>{price}</h4>
      </span>
    </div>
  );
};

export default RestaurantCard;











