import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
// import Offcanvas from 'react-bootstrap/Offcanvas';

export default class Slider12 extends Component {
  render() {
    return (
      <div style={{backgroundColor:"lightgray"}}>
         <Carousel>
      <Carousel.Item>
        <div className='d-flex justify-content-evenlt align-items-center'>
        <div className='p-2'>
            <h1 className='display-2 fw-bold'>Welcome to DreamCars</h1>
            <p className='fs-5'>We offer Second hand cars at cheaper rates</p>
            <Button variant="danger">Contact us</Button>{' '}
        </div>
        <div className='p-2'>
            <img src="./image/logo.jpg" alt='' height="600" width="600"/>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='d-flex justify-content-evenlt align-items-center'>
        <div className='p-2'>
            <h1 className='display-2 fw-bold'>Welcome to DreamCars</h1>
            <p className='fs-5'>We Offer Rented cars On Daily or Monthly Basis</p>
            <Button variant="danger">Contact us</Button>{' '}
        </div>
        <div className='p-2'>
            <img src="./image/logo.jpg" alt='' height="600" width="600"/>
        </div>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='d-flex justify-content-evenlt align-items-center'>
        <div className='p-2'>
            <h1 className='display-2 fw-bold'>Welcome to DreamCars</h1>
            <p className='fs-5'>Or You can take New Car And Add to your Family</p>
            <Button variant="danger">Contact us</Button>{' '}
        </div>
        <div className='p-2'>
            <img src="./image/logo.jpg" alt='' height="600" width="600"/>
        </div>
        </div>
      </Carousel.Item>
      </Carousel>
      </div>
    )
  }
}
