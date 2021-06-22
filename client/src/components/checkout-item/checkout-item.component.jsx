import React from 'react';
import './checkout-item.styles.scss';
import {addItem, removeItem, decreaseCartItem} from '../../redux/cart/cart.action';
import {connect} from 'react-redux';


const CheckoutItem = ({cartItem, removeItem, decreaseCartItem, addItem}) => {
    const {name, quantity, price, imageUrl} = cartItem
    return(
    <div className="checkout-item">
        <div className="image-container">
            <img src={imageUrl} alt="item" />
        </div>
        <span className="name">{name}</span>
        <span className="quantity">
            <div className="arrow" onClick={() => decreaseCartItem(cartItem)}>&#10094;</div>
            <span className="value">{quantity}</span>
            <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
        </span>
        <span className="price">{price}</span>
        <span className="remove-button" onClick={() => removeItem(cartItem)}>&#10005;</span>
    </div>
)}

const mapDispatchToProps = dispatch => ({
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item)),
    decreaseCartItem: item => dispatch(decreaseCartItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);