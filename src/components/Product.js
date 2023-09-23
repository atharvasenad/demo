import React, { Component } from 'react'
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import { Link,BrowserRouter } from 'react-router-dom';
export default class Product extends Component {
    constructor()
    {
        super()
        this.state={
            product:[
                {Image:'image/mg gloster.jpg',Name:'MG GLOSTER',Information:'Most powerful car',price:'37 Lakh'},
                {Image:'image/mg hector.jpg',Name:'MG HECTOR',Information:'Trending car',price:'26 Lakh'},
                {Image:'image/xl6.jpg',Name:'MARUTI SUZUKI NEXA XL6',Information:'Family car',price:'15 Lakh'},
                {Image:'image/xuv 700.jpg',Name:'MAHINDRA XUV 700',Information:'VIP car',price:'29 Lakh'},
                {Image:'image/alcazar.jpg',Name:'HYUNDAI ALCAZAR',Information:'Famous car',price:'23 Lakh'},
                {Image:'image/Thar.jpg',Name:'MAHINDRA THAR',Information:'Adventorous car',price:'12 Lakh'}
            ]
        }
    }
  render() {
    return (
      <div className='container'>
      <div className='row row-cols-1 row-cols-md-4 mt-3 pqr'>
        {
          this.state.product.map((item,index)=>{
            return (
          <div className='col p-2'>
      <Card style={{ width: '18rem' }} >
      <Card.Img variant="top" src={item.Image} className='mx-auto d-block p-2 pqr'/>
      <Card.Body>
        <Card.Title>{item.Name}</Card.Title>
        <Card>Price:{item.price}</Card>
        <BrowserRouter>
        <Link to ={"/Cart"} variant="danger" className='m-auto d-block mt-3'>+<i class="fa-solid fa-cart-shopping"></i></Link>
        </BrowserRouter>
      </Card.Body>
      </Card>
      </div>
          )
        })
        }
      </div>
      <BrowserRouter>
      <Link to ={"/Seemore"} variant="danger" className='m-auto d-block mt-3'>View All Products</Link>
      </BrowserRouter>
      </div>
    )
    }
    }