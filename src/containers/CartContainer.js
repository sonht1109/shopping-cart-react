import React, { Component } from 'react';
import Cart from '../components/Cart';
import * as actions from '../actions/index';
import {connect} from 'react-redux';
import CartItem from '../components/CartItem';

class CartContainer extends Component{

    mapProductToCart = this.props.cart.map((item, index)=>{
        return <CartItem key={index} cartItem={item}></CartItem>
    })

    totalPrice = ()=>{
        var total = 0;
        var {cart} = this.props;
        if(cart.length > 0){
            for(let i=0; i<cart.length; i++){
                total += cart[i].product.price * cart[i].quantity
            }
        }
        return total;
    }

    render(){
        var {cart} = this.props;
        return(
            <Cart totalPrice={this.totalPrice}>
                {this.mapProductToCart}
            </Cart>
        )
    }
}

const mapState = state=>{
    return{
        cart: state.cart
    }
}
const mapDispatch = dispatch=>{
    return {
        onAddToCart: (cart)=>{
            dispatch(actions.addToCart(cart.product, cart.quantity))
        }
    }
}

export default connect(mapState, mapDispatch)(CartContainer);