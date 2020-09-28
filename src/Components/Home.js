import React, { Component } from 'react'
import Footer from './Footer'
import Header from './Header'
import ProductList from './ProductList'
import Slider from './Slider'

class Home extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Slider/>
        <ProductList/>
        <Footer/>
      </div>
    )
  }
}
export default Home;