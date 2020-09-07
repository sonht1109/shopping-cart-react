import React, { Component } from 'react';
import CartContainer from '../containers/CartContainer';
import MessContainer from '../containers/MessContainer';

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
                    <MessContainer></MessContainer>
                    <CartContainer></CartContainer>
                </div>
            </main>
  
        )
    }
}

export default ProductList;