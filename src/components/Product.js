import React, { Component } from 'react';
import * as mess from '../constants/Messages';

class Product extends Component{

    onAddToCart = (product)=>{
        if(product.inventory > 0){
            this.props.onAddToCart(this.props.product);
            this.props.onChangeMess(mess.MSG_SUCCESSFULL_ADD);
        }
        else{
            alert("San pham da het so luong !");
        }
    }

    render(){
        var {product} = this.props;
        return(
            <div className="col-lg-4 col-md-6 mb-r">
                <div className="card text-center card-cascade narrower">
                    <div className="view overlay hm-white-slight z-depth-1">
                        <img src={product.src}
                            className="img-fluid" alt={product.name} />
                        <a>
                            <div className="mask waves-light waves-effect waves-light"></div>
                        </a>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title">
                            <strong>
                                <a>{product.name}</a>
                            </strong>
                        </h4>
                        <p className="card-text">
                            {product.desc}
                        </p>
                        <p className="cart-text">
                            In stock : {product.inventory}
                        </p>
                        <div className="card-footer d-flex align-items-center">
                            <span className="left">${product.price}</span>
                            <span className="right ml-auto">
                                <a 
                                className="btn-floating blue-gradient" 
                                data-toggle="tooltip" 
                                data-placement="top"
                                data-original-title="Add to Cart"
                                onClick={()=>this.onAddToCart(product)}
                                >
                                    <i className="fa fa-shopping-cart"></i>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;