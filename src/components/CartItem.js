import React, { Component } from 'react';
import * as mess from '../constants/Messages';

class CartItem extends Component{

    totalPriceCartItem = ()=>{
        return this.props.cartItem.quantity * this.props.cartItem.product.price;
    }

    onDelete = ()=>{
        var {cartItem} = this.props;
        this.props.onDelete(cartItem.product);
        this.props.onChangeMess(mess.MSG_SUCCESSFULL_REMOVE)
    }

    onUpdateQuantity =(e)=>{
        var value = e.target.getAttribute('data-value');
        var {cartItem} = this.props;
        this.props.onUpdateQuantity(cartItem.product, value);
        this.props.onChangeMess(mess.MSG_SUCCESSFULL_UPDATE);
    }

    render(){

        var {cartItem} = this.props;

        return(
            <tr>
                <th scope="row">
                    <img src={cartItem.product.src}
                        alt="" className="img-fluid z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{cartItem.product.name}</strong>
                    </h5>
                </td>
                <td>$ {cartItem.product.price}</td>
                <td className="center-on-small-only">
                    <span className="qty">{cartItem.quantity} </span>
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light"
                            data-value={-1}
                            onClick={this.onUpdateQuantity}>
                            <a data-value={-1}>—</a>
                        </label>
                        <label className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light"
                            data-value={1}
                            onClick={this.onUpdateQuantity}>
                            <a data-value={1}>+</a>
                        </label>
                    </div>
                </td>
                <td>$ {this.totalPriceCartItem()}</td>
                <td>
                    <button 
                    type="button" 
                    className="btn btn-sm btn-primary waves-effect waves-light" 
                    data-toggle="tooltip" 
                    data-placement="top"
                    data-original-title="Remove item"
                    onClick={this.onDelete}>
                        X
                    </button>
                </td>
            </tr>
        )
    }
}

export default CartItem;