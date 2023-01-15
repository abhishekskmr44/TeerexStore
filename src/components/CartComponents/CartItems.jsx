import React, { useState } from "react";
import { Form, Image, Toast } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import styles from "./CartItems.module.css";

const CartItem = (props) => {

  const { product, dispatch } = props;

  const [showToast, setToast] = useState(false);
  const [showQty, setQty] = useState(false);
  const [prod, setProd] = useState({});

  const quantityChangeHandle = (event) => {
    if (event.target.value < 1) {
      setToast(true);
    } else {
      if (event.target.value > product.quantity) {
        setProd(product);
        setQty(true);
      } else {
        dispatch({
          type: "CHANGE_CART_QUANTITY",
          payload: {
            id: product.id,
            qty: event.target.value,
          },
        });
      }
    }
  };

  return (
    <>
      <Toast
        onClose={() => setToast(false)}
        autohide
        show={showToast}
        delay={2109}
      >
        <Toast.Header>
          <strong className="mr-auto">Apologies</strong>
        </Toast.Header>
        <Toast.Body>Min Quanity can't be lesser than 1</Toast.Body>
        </Toast>
  
       <Toast onClose={() => setQty(false)} autohide show={showQty} delay={2100}>
        <Toast.Header>
          <strong className="mr-auto">Apologies</strong>
        </Toast.Header>
        <Toast.Body>
          {" "}
          {`The max availabiity of ${prod.name} is ${prod.quantity}`}
        </Toast.Body>
      </Toast>

      {/* List of Products */}
      <div className={styles.row}>
        <Image className={styles.image} src={product.imageURL} alt={product.name} fluid rounded />
        <div>
          <h5>{product.name}</h5>
          <h5>{product.price}</h5>
        </div>
        <div>
          <span>
            <strong>Qty:</strong>
          </span>
          <Form.Control
            type="number"
            value={product.qty}
            onChange={quantityChangeHandle}
          />
        </div>
        <button
          className={styles.del}
          onClick={() =>
            dispatch({
              type: "REMOVE_FROM_BAG",
              payload: product,
            })
          }
        >
          <AiFillDelete fontSize="19px" />
          Delete
        </button>
      </div>
     
    </>
  );
};

export default CartItem;