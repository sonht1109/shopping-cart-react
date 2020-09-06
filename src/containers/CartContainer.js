import React, { Component } from 'react';
import Cart from '../components/Cart';
import * as actions from '../actions/index';
import {connect} from 'react-redux';

class CartContainer extends Component{
    render(){
        var {cart} = this.props;
        return(
            <Cart cart={cart}></Cart>
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