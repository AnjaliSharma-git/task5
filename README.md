#E-Commerce Store

This project is a simple ReactJS-based e-commerce store that allows users to browse products, add them to a cart, and manage their cart through a modal interface. The product data is fetched from the Fake Store API, and the application features a responsive design for a user-friendly experience on both desktop and mobile devices.

## Features
- **Product Listing**: Displays products with their image, title, and price.
- **Add to Cart**: Users can add products to the cart.
- **Cart Management**: Shows the number of items in the cart in the navbar, with the ability to view, remove, or update items through a modal.
- **Responsive Design**: Works on desktop and mobile devices.
- **Alerts**: Notifies users if they try to add a product that is already in the cart.

## Tech Stack
- **ReactJS**: For building the interactive UI.
- **JavaScript (ES6+)**: For handling logic and interactivity.
- **HTML/CSS**: For structuring and styling the components.
- **Fake Store API**: To fetch product data.

## Project Structure
- `src/`: Contains all the React components:
  - **App.js**: The main component handling product fetching, cart logic, and UI rendering.
  - **Navbar.js**: Displays the cart item count and manages the "View Cart" button.
  - **ProductCard.js**: Displays individual product details with "Add to Cart" functionality.
  - **CartModal.js**: Manages the modal that shows the cart items and provides "Remove from Cart" functionality.

## Usage

- **Add a Product**: Browse the product listings, and click the "Add to Cart" button on any product.
- **View Cart**: Click the "Cart" button in the navbar to view the products in the cart through a modal.
- **Remove from Cart**: In the modal, click the "Remove from Cart" button to remove items from the cart.
