import React, { Component } from 'react';
import CartItem from './CartItem';
import Total from './Total';

class Cart extends Component{
    
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

        return(
            <section className="section">
                <div className="table-responsive">
                    <table className="table product-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Sản Phẩm</th>
                                <th>Giá</th>
                                <th>Số Lượng</th>
                                <th>Tổng Cộng</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.mapProductToCart}
                            <Total price={this.totalPrice()}></Total>
                        </tbody>
                    </table>
                </div>
            </section>
        )
    }
}

export default Cart;