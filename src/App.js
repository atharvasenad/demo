import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header123 from './components/Header123';
import Product from './components/Product';
import Slider12 from './components/Slider12';
import './App.css';
import Whyus from './components/Whyus';
import Information1 from './components/Information1';
import Last1 from './components/Last1';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Testimonial from './components/Testimonial';
import Home from './components/Home';
import Cart from './components/Cart';
import Stats from './components/Stats';
export default class App extends Component {
  render() {
    return (
      <div className='container p-2'>
        <BrowserRouter>
        <Header123/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Whyus' element={<h2>Shop page</h2>}/>
          <Route path='/Whyus' element={<h2>why us</h2>}/>
          <Route path='/Testimonial' element={<Testimonial/>}/>
          <Route path='/Contact' element={<Information1/>}/>
          <Route path='/Login' element={<Information1/>}/>
          <Route path='/Cart' element={<Cart/>}/>
          <Route path='/Search' element={<h2>Search</h2>}/>
        </Routes>
        </BrowserRouter>
        <Slider12/><br/>
        <Product/><br/>
        <Whyus/><br/>
        <Stats/><br/>
        <Information1/><br/>
        <Testimonial/><br/>
        <Last1/>
      </div>
    )
  }
}