import React, { Component } from 'react';
import Message from './Message';
import CartContainer from '../containers/CartContainer';

class ProductList extends Component{

    render(){
        return(
            <main id="mainContainer">
                <div className="container">
                    <section className="section">
                        <h1 className="section-heading">Danh Sách Sản Phẩm</h1>
                        <div className="row">
                            {this.props.children}
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