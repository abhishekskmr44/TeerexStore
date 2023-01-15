import React from "react";
import CartItemsList from "./CartItemsListed";

const Cart = () => {

    return (
        <div style={{width:"88.5%", margin:"auto"}}>
            
            <div style={{fontSize: "23.7px", fontWeight:"598.35", margin:"1.1rem" }}>
            <span>Shopping Cart.</span>
            </div>
            <div>
                <CartItemsList/>
            </div>
            
        </div>
    );
};

export default Cart;