const ShimmerMenu = () => {
    return (
      <div className="res-details">
        <div className="res-card shimmer-card">
          <div className="res-main-img shimmer-img" />
          <div className="res-card-text">
            <div className="shimmer-line shimmer-title" />
            <div className="shimmer-line shimmer-small" />
            <div className="shimmer-line shimmer-small" />
            <div className="shimmer-line shimmer-small" />
            <div className="shimmer-line shimmer-small" />
          </div>
        </div>
  
        <h2 className="menu-title shimmer-line shimmer-title" />
  
        <ul className="menu-list">
          {Array(5)
            .fill("")
            .map((_, i) => (
              <li key={i} className="menu-item">
                <div className="menu-item-text">
                  <div className="shimmer-line shimmer-medium" />
                  <div className="shimmer-line shimmer-small" />
                </div>
                <div className="menu-item-img shimmer-img" />
              </li>
            ))}
        </ul>
      </div>
    );
  };
  
  export default ShimmerMenu;
  