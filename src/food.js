// Importing necessary modules from React library
import React, { Fragment, useState } from "react";
import "./Food.css";
import FoodOrder from "./FoodOrder";


const Foods = (props) => {
    const [selectedFood, setSelectedFood] = useState("");

    // Event handler for selecting a food item
    const handleSelect = (event) => {
        setSelectedFood(
            props.foodItems.find((item) => {
                return item.id === parseInt(event.currentTarget.dataset.id);
            })
        );
    };

    // Rendering the component
    return (
        <Fragment>
            {/* Displaying the list of food items if no item is selected */}
            {!selectedFood && (
                <Fragment>
                    {/* Heading for the food menu */}
                    <h4 className="foodTitle">Choose from our Menu</h4>
                    
                    {/* List of food items */}
                    <ul className="ulFoods">
                        {props.foodItems.map((item) => {
                            return (
                                <li
                                    key={item.id}
                                    className="liFoods"
                                    data-id={item.id}
                                    onClick={handleSelect}
                                >
                                    {/* Displaying the image of the food item */}
                                    <img
                                        className="foodImg"
                                        src={require(`./images/${item.image}`)}
                                        alt={item.name}
                                    />
                                    
                                    {/* Displaying the description and price of the food item */}
                                    <div className="foodItem">
                                        <p className="foodDesc">{item.desc}</p>
                                        <p className="foodPrice">{item.price} cedis</p>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </Fragment>
            )}

            {/* Displaying the FoodOrder component if a food item is selected */}
            {selectedFood && (
                <FoodOrder
                    food={selectedFood}
                    // Callback function to return to the menu and clear selection
                    returnToMenu={() => setSelectedFood("")}
                    // Callback function to update the quantity of a food item
                />
            )}
        </Fragment>
    );
};

// Exporting the Foods component as the default export
export default Foods;
