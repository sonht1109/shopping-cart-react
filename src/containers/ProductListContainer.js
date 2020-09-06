import React, { Component } from 'react';
import ProductList from '../components/ProductList';
import {connect} from 'react-redux';

class ProductListContainer extends Component{

    render(){
        var {products} = this.props;
        return(
            <ProductList products={products}></ProductList>
        )
    }
}

const mapState = state=>{
    return{
        products: state.products
    }
}

const mapDispatch = dispatch=>{
    return{}
}

export default connect(mapState, mapDispatch)(ProductListContainer);