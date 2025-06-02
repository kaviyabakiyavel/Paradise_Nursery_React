# Paradise_Nursery_React
Paradise Nursery is a modern, responsive shopping application built with React and Redux Toolkit, designed to simulate an online houseplant store. It allows users to browse a variety of houseplants, add them to a shopping cart, and adjust item quantities before checkout.

1. Landing Page with background and Get Started button
2. Product Listing Page with 6+ plants and Add to Cart
3. Header with dynamic cart count
4. Shopping Cart Page with quantity add, update, remove
5. Routing between pages
6. Global cart state using Context API

Step 1: Initialize Your Project
- npx create-react-app paradise-nursery
- cd paradise-nursery
- npm start

Step 2: Set Up File Structure
src/
├── app/
│   └── store.js
├── features/
│   └── cart/
│       ├── cartSlice.js
│       └── cartSelectors.js
├── components/
│   ├── Header.js
│   ├── ProductCard.js
│   └── CartItem.js
├── pages/
│   ├── LandingPage.js
│   ├── ProductPage.js
│   └── CartPage.js
├── data/
│   └── products.js
├── App.js
└── index.js

Step 3: Create Redux Store
src/app/store.js

Step 4: Create Cart Slice
src/features/cart/cartSlice.js

Step 5: Create Cart Selector 
src/features/cart/cartSelectors.js

Step 7: Install redux dev tools in chrome 


How to persist Redux state using localStorage:
1. Create helper functions to load and save state:
src\utils\localStorage.js

2. Update your Redux store to preload and save state:
src\app\store.js