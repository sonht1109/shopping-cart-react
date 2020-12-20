import React, { Component } from 'react';
import * as mess from '../constants/Messages';

class Total extends Component{

    onPurchase = ()=>{
        if(this.props.price > 0){
            this.props.onPurchase();
            this.props.onChangeMess(mess.MSG_SUCCESSFULL_PURCHASE);
            this.props.onUpdateStock(this.props.cart);
        }
        else{
            this.props.onChangeMess(mess.MSG_CART_EMPTY)
        }
    }

    render(){
        return(
            <tr>
                <td colSpan="3"></td>
                <td>
                    <h4>
                        <strong>Tổng Tiền</strong>
                    </h4>
                </td>
                <td>
                    <h4>
                        <strong>$ {this.props.price}</strong>
                    </h4>
                </td>
                <td colSpan="3">
                    <button
                    type="button"
                    className="btn btn-primary waves-effect waves-light"
                    onClick={this.onPurchase}>
                        Complete purchase
                        <i className="fa fa-angle-right right"></i>
                    </button>
                </td>
            </tr>
        )
    }
}

export default Total;