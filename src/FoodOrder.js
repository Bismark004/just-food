// Importing necessary modules from React library
import React, { Fragment, useState } from "react";
import "./FoodOrder.css";
import { useContext } from "react";
import { foodItemsContext } from "./App";


// Functional component definition for FoodOrder
const FoodOrder = (props) => {
    const selectedFood = props.food;

    
    const [quantity, setQuantity] = useState(1);
    const [totalAmount, setTotalAmount] = useState(selectedFood.price);
    const [isOrdered, setIsOrdered] = useState(false);
    const menuItems = useContext(foodItemsContext);


    
    const handleQuantityChange = (event) => {
        setTotalAmount(selectedFood.price * event.target.value);
        setQuantity(event.target.value);
    };

    // Event handler for submitting the order
    const handleClick = () => {
        
        setIsOrdered(true);
    };

    // Rendering the component
    return (
        <Fragment>
            {/* Displaying the name and image of the selected food item */}
            <h4 className="selFoodTitle">{selectedFood.name}</h4>
            <img
                className="selFoodImg"
                src={require(`./images/${selectedFood.image}`)}
                alt={selectedFood.name}
            />

            {/* List of details including description, price, quantity, name, and mobile number */}
            <ul className="ulFoodDetails">
                <li>
                    <p className="selFoodDesc">{selectedFood.desc}</p>
                </li>
                <li>
                    <p className="selFoodPrice">{totalAmount} cedis</p>
                </li>
                <li className="selQuantity">
                    <label>Quantity</label>
                    {/* Input for selecting the quantity of the food item */}
                    <input
                        type="number"
                        defaultValue={1}
                        className="quantity"
                        min="1"
                        max="10"
                        onChange={handleQuantityChange}
                    />
                </li>
                <li className="liDetails">
                    <label htmlFor="name"></label>
                    {/* Input for entering the customer's name */}
                    <input
                        type="text"
                        className="inputFields"
                        id="name"
                        name="name"
                        placeholder="Your Name"
                    />
                </li>
                <li>
                    <label htmlFor="mobile"></label>
                    {/* Input for entering the customer's mobile number */}
                    <input
                        type="text"
                        className="inputFields"
                        id="mobile"
                        name="mobile"
                        placeholder="Your mobile number"
                    />
                </li>

                {/* Buttons for submitting the order and returning to the menu */}
                <li>
                    <button className="btn btnOrder" onClick={handleClick}>
                        Submit Order
                    </button>
                    <button className="btn btnReturnMenu" onClick={props.returnToMenu}>
                        Return to menu
                    </button>
                </li>

                {/* Displaying a message if the order is submitted */}
                {isOrdered && (
                    <li className="liMessage">
                        <label>
                            Order submitted! You will receive an SMS once ready for Pickup.
                        </label>
                    </li>
                )}
            </ul>
        </Fragment>
    );
};

// Exporting the FoodOrder component as the default export
export default FoodOrder;
