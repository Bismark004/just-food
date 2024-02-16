// Importing necessary modules from React library
import { Fragment, useState } from 'react';
import './App.css';
import Foods from './Food';
export const foodItemsContext = React.createContext();

// Main functional component definition for App
function App() {
  const [isChooseFoodPage, setIsChooseFoodPage] = useState(false);
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

  


  
  // Rendering the component
  return (
    <foodItemsContext.Providerrovider value={menuItems}>
    <div className="App">
      {/* Button to toggle between availability check and order food pages */}
      <button className='toggleButton'
       onClick={() => setIsChooseFoodPage(!isChooseFoodPage)}
       >
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
        <Foods 
        foodItems={menuItems} 
        ></Foods>
      )}
    </div>
    </foodItemsContext.Providerrovider>
  );
}

export default App;
