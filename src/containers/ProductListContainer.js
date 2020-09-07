import React, { Component } from 'react';
import ProductList from '../components/ProductList';
import {connect} from 'react-redux';
import Product from '../components/Product';
import * as actions from '../actions/index'

class ProductListContainer extends Component{
    
    mapProductToTable(products){
        if(products.length){
            products = products.map((product, index)=>{
                return <Product
                        key={index}
                        product={product}
                        onAddToCart={this.props.onAddToCart}
                        onChangeMess={this.props.onChangeMess}>
                        </Product>
            })
        }
        return products;
    }

    render(){
        var {products} = this.props;
        return(
            <ProductList>
                {this.mapProductToTable(products)}
            </ProductList>
        )
    }
}

const mapState = state=>{
    return{
        products: state.products
    }
}

const mapDispatch = dispatch=>{
    return{
        onAddToCart: (product)=>{
            dispatch(actions.addToCart(product, 1))
        },
        onChangeMess: (mess)=>{
            dispatch(actions.changeMess(mess))
        }
    }
}

export default connect(mapState, mapDispatch)(ProductListContainer);