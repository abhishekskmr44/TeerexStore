import React, { useEffect, useState } from "react";
import { Button} from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const CartTotal = (props) => {

  const { dispatch } = props;

  let cart = JSON.parse(localStorage.getItem("cartStorage"));

  const navigate = useNavigate()

  console.log(typeof cart);

  let [total, setTotal] = useState(0);

  const sum = () => {
    let result = 0;
    for (let i = 0; i < cart.length; i++) {
      result += cart[i].price * cart[i].qty;
    }
    setTotal(result);
  };
  useEffect(() => {
   sum()
  }, [cart]);

  return(
     <>
      <div style={{display:"flex",justifyContent:"space-between"}}>
        <h3 >Total Amount ₹.{total}</h3>
        <Button
        onClick={()=>{
           navigate("/")
           alert("Order has been placed succesfully!")
           localStorage.clear();
           dispatch({
            type: "DELETE_FROM_CART",
          })
        }}>Place Order</Button>
      </div>

     </>
  )
};

export default CartTotal;