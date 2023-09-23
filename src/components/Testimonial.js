import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel';
// import Button from 'react-bootstrap/Button';
export default class Testimonial extends Component {
  render() {
    return (
      <div className='test'>
        <center><h2>Customer Review on Our Service</h2></center>
        <Carousel>
      <Carousel.Item>
        <div className='d-flex justify-content-evenlt align-items-center'>
        <div className='p-2'>
            <h3 className='display-2 fw-bold fs-5'>Mr.Ranjan Kumar</h3>
            <p className='fs-7'>Well my Experience with DreamCar Was Excellent not only they sell  Car but acquire lots of trust in Everyone mind<br/>
            so thanks to all team</p>
            {/* <Button variant="danger">Contact us</Button>{' '} */}
        </div>
        {/* <div className='p-2'> */}
            {/* <img src="./image/logo.jpg" alt='' height="600" width="600"/> */}
        {/* </div> */}
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='d-flex justify-content-evenlt align-items-center'>
        <div className='p-2'>
            <h1 className='display-2 fw-bold fs-5'>Mr.Uday singh</h1>
            <p className='fs-7'>Well my Experience with DreamCar Was Excellent not only they sell  Car but acquire lots of trust in Everyone mind<br/>
            so thanks to all team</p>
            {/* <Button variant="danger">Contact us</Button>{' '} */}
        </div>
        {/* <div className='p-2'> */}
            {/* <img src="./image/logo.jpg" alt='' height="600" width="600"/> */}
        {/* </div> */}
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className='d-flex justify-content-evenlt align-items-center'>
        <div className='p-2'>
            <h1 className='display-2 fw-bold fs-5'>Mr.Pradeep shetty</h1>
            <p className='fs-7'>Well my Experience with DreamCar Was Excellent not only they sell  Car but acquire lots of trust in Everyone mind<br/>
            so thanks to all team</p>
            {/* <Button variant="danger">Contact us</Button>{' '} */}
        </div>
        {/* <div className='p-2'> */}
            {/* <img src="./image/logo.jpg" alt='' height="600" width="600"/> */}
        {/* </div> */}
        </div>
      </Carousel.Item>
      </Carousel>
      </div>
    )
  }
}
