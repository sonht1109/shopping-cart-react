import React, { Component } from 'react';
import Cart from '../components/Cart';
import {connect} from 'react-redux';
import CartItem from '../components/CartItem';
import * as actions from '../actions/index'
import Total from '../components/Total';
import Product from '../components/Product';

class CartContainer extends Component{

    mapProductsToCart = (cart)=>{
        var res = [];
        if(cart.length>0){
            res = cart.map((item, index)=>{
                return(
                    <CartItem
                    key={index}
                    cartItem={item}
                    onDelete={this.props.onDelete}
                    onChangeMess={this.props.onChangeMess}
                    onUpdateQuantity={this.props.onUpdateQuantity}
                    ></CartItem>
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
            <Cart
            totalPrice={this.totalPrice}>
                {this.mapProductsToCart(cart)}
                <Total
                cart={cart}
                price={this.totalPrice()}
                onPurchase={() => this.props.onPurchase(cart)}
                onChangeMess={this.props.onChangeMess}
                onUpdateStock={(cart)=>this.props.onUpdateStock(cart)}>
                </Total>
            </Cart>
        )
    }
}

const mapState = state=>{
    return{
        cart: state.cart,
    }
}

const mapDispatch = dispatch => {
    return{
        onDelete: (product)=>{
            dispatch(actions.deleteItem(product));
        },
        onChangeMess: (mess)=>{
            dispatch(actions.changeMess(mess))
        },
        onUpdateQuantity: (product, value)=>{
            dispatch(actions.updateQuantity(product, value))
        },
        onPurchase: ()=>{
            dispatch(actions.purchase())
        },
        onUpdateStock: (cart)=>{
            dispatch(actions.updateStock(cart))
        }
    }
}

export default connect(mapState, mapDispatch)(CartContainer);