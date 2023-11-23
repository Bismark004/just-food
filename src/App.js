// Importing necessary modules from React library
import { Fragment, useState } from 'react';

// Importing the stylesheet for the component
import './App.css';

// Importing the Foods component
import Foods from './Food.js';

// Main functional component definition for App
function App() {
  // State hooks to manage the menu items and toggle between availability check and order food pages
  const [menuItems, setMenuItems] = useState([
    // Sample menu items with properties like id, name, quantity, description, price, and image
    {
      id: 1,
      name: "Chicken Burger",
      quantity: 40,
      desc: "Fried chicken burger - lettuce, tomato, cheese and mayonnaise",
      price: "240",
      image: "cb.jpg",
    },

    {
      id: 2,
      name: "Veg Burger",
      quantity: 30,
      desc: "Plant-based burger — lettuce, tomato, vegan cheese and mayonnaise",
      price: "220",
      image: "vb.jpg",
    },
    {
      id: 3,
      name: "Chips",
      quantity: 50,
      desc: "Potato chips fried to perfection",
      price: "70",
      image: "chips.jpg",
    },
    {
      id: 4,
      name: "Ice Cream",
      quantity: 30,
      desc: "Ice cream - Vanilla ice cream double scoop",
      price: "40",
      image: "ic.jpg",
    },
    
  ]);

  const [isChooseFoodPage, setIsChooseFoodPage] = useState(false);

  // Function to update the quantity of a menu item after an order is placed
  const updateMenuItemQuantity = (id, orderQuantity) => {
    const updatedMenuItems = menuItems.map((item) => {
      if (item.id === id)
        return {
          ...item,
          quantity: item.quantity - orderQuantity,
        };
      return item;
    });
    setMenuItems(updatedMenuItems);
  };

  // Rendering the component
  return (
    <div className="App">
      {/* Button to toggle between availability check and order food pages */}
      <button className='toggleButton' onClick={() => setIsChooseFoodPage(!isChooseFoodPage)}>
        {isChooseFoodPage ? "Availability Check" : "Order Food" }
      </button>
      
      {/* Header for the online food shop */}
      <h3 className="title"> Marc Food Online Shop </h3>

      {/* Conditionally rendering content based on the selected page */}
      {!isChooseFoodPage && (
        <Fragment>
          {/* Header for the menu availability page */}
          <h4 className="subTitle"> Menu Availability </h4>
          
          {/* List of menu items with their names and quantities */}
          <ul className="ulApp">
            {menuItems.map((item) => (
              <li key={item.id} className='liAppItem'>
                {item.name} - {item.quantity} 
              </li>
            ))}
          </ul>
        </Fragment>
      )}

      {isChooseFoodPage && (
        // Rendering the Foods component for ordering food
        <Foods foodItems={menuItems} updateQuantity={updateMenuItemQuantity}></Foods>
      )}
    </div>
  );
}

// Exporting the App component as the default export
export default App;
