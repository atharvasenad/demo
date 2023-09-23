import React, { Component } from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
export default class Last1 extends Component {
  render() {
    return (
      <div className='last'>
        <center><h2>Contact us</h2></center>
        <CardGroup>
      <Card className='last'>
        <Card.Body>
          <Card.Title>Contact</Card.Title>
          <Card.Text>
            7448267098<br/>
            atharva4137senad@gmail.com

          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='last'>
        <Card.Body>
          <Card.Title>Address</Card.Title>
          <Card.Text>
            Plot no 33 Reshimbagh Near sarang Gas Agency,Nagpur
          </Card.Text>
        </Card.Body>
      </Card>
      <Card className='last'>
        <Card.Body>
          <Card.Title>Our Other Firm</Card.Title>
          <Card.Text>
            Senad Associates Reshimbagh Nagpur<br/>
            Senad Farm and Services,Ukadwahi,Umred Road Nagpur
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
      </div>
    )
  }
}
