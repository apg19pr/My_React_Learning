import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/cartSlice';

export default function body() { // UI stuff

    // connect redux store to UI => useSelector Hook 
    const cartItems = useSelector((store) => store.toggle.items);
    // console.log(cartItems); // return the items array 

    const dispatch = useDispatch(); // by react

    // onclik of add item button 
    const addToCart = () => {
        dispatch(addItem("Jeans"));
        // coming from redux/cartSlice 
        // dispatching an action 
        // which is calling the reducer function "addItems" 
        // push this Jeans inside the cart
    }

    const removeFromCart = () => {
        dispatch(removeFromCart()); // coming from redux/cartSlice
        // dispatching an action 
        // which is calling the reducer function "removeFromCart" 
    }

    const clearCart = () => {
        dispatch(clearCart()); // coming from redux/cartSlice
        // dispatching an action 
        // which is calling the reducer function "clearCart" 
    }

    return (
        <div>
            <h1>this is body</h1>
            <h2> Cart ({cartItems.length} items)</h2>
            <button onClick={addToCart}>Add Item</button>
            <button onClick={removeFromCart}>Remove Item</button>
            <button onClick={clearCart}>Clear Cart</button>
        </div>
    )
}
