import React, { useState } from "react";
import './ordertracker.css';
import { useParams } from "react-router-dom";
function Ordertracker() {

    const { id } = useParams();
    const [ OrderStatus, setOrderStatus ] = useState ({});
    return (
        <div className="ordertracker">
            <h1 className="ordertracker__heading">
                Tracker
            </h1>
            <input type="text" placeholder={id}></input>
        <h2>Order Details for ID: {id}</h2>
          <p>Loading order details...</p>
        
      </div>
      )

} 

export default Ordertracker;