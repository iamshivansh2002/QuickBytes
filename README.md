# QuickBytes 🍔

**QuickBytes** is a modern food delivery app built with React, Redux, and React Router. Users can browse restaurants, view menus, add items to a cart, and place orders. The app supports offline detection, user authentication, and dynamic restaurant menus.  

---
## 🚀 Demo

Here is a quick look at QuickByte in action:

![Demo of QuickByte](Demo-QuickByte.gif)

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
```bash
QuickBytes/
│
├─ components/       # All React UI components
│   ├─ Header.js
│   ├─ Footer.js
│   ├─ Body.js
│   ├─ About.js
│   ├─ Contact.js
│   ├─ Error.js
│   ├─ Login.js
│   ├─ Cart.js
│   ├─ CartItem.js
│   ├─ RestaurantCard.js
│   ├─ RestaurantMenu.js
│   ├─ Shimmer.js
│   └─ ShimmerMenu.js
│
├─ utils/            # Redux store, hooks, mock data
│   ├─ store.js
│   ├─ cartSlice.js
│   ├─ useOnline.js
│   ├─ useRestaurantMenu.js
│   └─ mockData.js
│
├─ App.js
├─ index.js
└─ index.css
```


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

1. **Clone the repo**
   ```bash
   git clone https://github.com/iamshivansh2002/QuickBytes.git

 2. **Install dependencies**
    ```bash
    npm install

 3. **Run the app**
    ```bash
    npm start

 
   4.Open the app
In your browser, go to 👉 http://localhost:3000

