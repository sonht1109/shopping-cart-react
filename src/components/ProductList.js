import React, { Component } from 'react';
import Product from './Product';
import Message from './Message';
import CartContainer from '../containers/CartContainer';

class ProductList extends Component{

    mapProductToTable(products){
        if(products.length){
            products = products.map((product, index)=>{
                return <Product key={index} product={product}></Product>
            })
        }
        return products;
    }

    render(){
        var {products} = this.props;
        return(
            <main id="mainContainer">
                <div className="container">
                    <section className="section">
                        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                        <div className="row">
                            {this.mapProductToTable(products)}
                        </div>
                    </section>
                    <Message></Message>
                    <CartContainer></CartContainer>
                </div>
            </main>
  
        )
    }
}

export default ProductList;