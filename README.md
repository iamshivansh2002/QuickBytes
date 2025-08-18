# QuickBytes 🍔

**QuickBytes** is a modern food delivery app built with React, Redux, and React Router. Users can browse restaurants, view menus, add items to a cart, and place orders. The app supports offline detection, user authentication, and dynamic restaurant menus.  

---

## 🚀 Features

- Browse restaurants with real-time search.
- View detailed restaurant menus.
- Add and remove items from the cart.
- Clear the cart or continue shopping.
- User login and logout functionality.
- Offline detection with friendly UI feedback.
- Responsive layout using React and CSS.
- Smooth loading experience with shimmer effects.

---

## 🛠 Tech Stack

- **Frontend:** React, React Router, CSS  
- **State Management:** Redux Toolkit  
- **Routing:** React Router v6 (`createBrowserRouter`)  
- **Utilities:** Custom hooks (`useOnline`, `useRestaurantMenu`)  

---

## 🗂 Project Structure 

* [components](./components)
  * [Header.js](./components/Header.js)
  * [Footer.js](./components/Footer.js)
  * [Body.js](./components/Body.js)
  * [About.js](./components/About.js)
  * [Contact.js](./components/Contact.js)
  * [Error.js](./components/Error.js)
  * [Login.js](./components/Login.js)
  * [Cart.js](./components/Cart.js)
  * [CartItem.js](./components/CartItem.js)
  * [RestaurantCard.js](./components/RestaurantCard.js)
  * [RestaurantMenu.js](./components/RestaurantMenu.js)
  * [Shimmer.js](./components/Shimmer.js)
  * [ShimmerMenu.js](./components/ShimmerMenu.js)
* [utils](./utils)
  * [store.js](./utils/store.js)
  * [cartSlice.js](./utils/cartSlice.js)
  * [useOnline.js](./utils/useOnline.js)
  * [useRestaurantMenu.js](./utils/useRestaurantMenu.js)
  * [mockData.js](./utils/mockData.js)
* [App.js](./App.js)
* [index.js](./index.js)
* [index.css](./index.css)


---

## ⚙️ How It Works

1. **Routing:**  
   `App.js` sets up routing with `createBrowserRouter`. Pages include Home (`Body`), About, Contact, Login, Cart, and dynamic restaurant menus (`RestaurantMenu`).  

2. **State Management:**  
   Cart state is managed with Redux Toolkit (`cartSlice`). Adding, removing, or clearing cart items updates the global store.  

3. **Offline Detection:**  
   `useOnline` hook detects internet connectivity and displays a friendly offline message when disconnected.  

4. **Dynamic Restaurant Menu:**  
   `useRestaurantMenu` hook fetches restaurant details from mock data based on `resId`. Shimmer effects provide smooth loading UI.  

5. **Authentication:**  
   Simple login system using `useState` and `useOutletContext` to manage user login state.  

---

## 💻 Getting Started

1.Clone the repo:
git clone https://github.com/iamshivansh2002/QuickBytes.git

2.Install dependencies:
npm install

3.Run the app:
npm start

4.Open http://localhost:3000 in your browser.

