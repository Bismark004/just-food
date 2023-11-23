import React, {Fragment} from "react";
import "./Food.css"

const Foods = (props) => {
    return (
        <Fragment>
            <h4 className="foodTitle"> Choose from our menu</h4>
            <ul className="ulFood">
                {props.fooodItems.map((item) => {
                    return (
                        <li key={item.id} className="liFoodselected">
                            <img
                              className="foodImg"
                              src={require(`./images/${item.image}`)}
                              alt={item.name}
                            />

                            <div className="foodItem">
                                <p className="foodDesc">{item.desc}</p>
                                <p className="foodPrice">{item.price}$</p>

                            </div>
                    
                        </li>
                    )
                })}
            </ul>
        </Fragment>
    );
};
export default Foods;