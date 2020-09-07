import React, { Component } from 'react';
import Cart from '../components/Cart';
import {connect} from 'react-redux';
import CartItem from '../components/CartItem';

class CartContainer extends Component{

    mapProductsToCart = (cart)=>{
        var res = [];
        if(cart.length>0){
            res = cart.map((item, index)=>{
                return(
                    <CartItem key={index} cartItem={item}></CartItem>
                )
            })
        }
        return res;
    }

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
                {this.mapProductsToCart(cart)}
            </Cart>
        )
    }
}

const mapState = state=>{
    return{
        cart: state.cart
    }
}

export default connect(mapState, null)(CartContainer);