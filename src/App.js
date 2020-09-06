import React, { Component } from 'react';
import Header from './components/Header';
import ProductListContainer from './containers/ProductListContainer';
import Footer from './components/Footer';

class App extends Component {
  render(){
    return (
      <div className="hidden-sn animated deep-purple-skin">
        <Header></Header>
        <ProductListContainer></ProductListContainer>
        <Footer></Footer>
    </div>
    );
  }
}

export default App;
