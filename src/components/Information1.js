import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
function Information1() {
  const [name,setName]=useState("")
  const [contact,setContact]=useState("")
  const [email,setEmail]=useState("")
  const [usererr,setUsererr]=useState("")
  const [userpass,setPasserr]=useState("")
  const [id,setID]=useState("")
  function logininfo()
  {
    let a={name,contact,email}
    fetch('http://localhost:3000/enquiry',{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify(a)
    }).then((resp)=>{
      resp.json().then((resp1)=>{
        console.log(resp1)
      })
    })
  }
  function uservalid(e)
  {
    let uname=e.target.value
    if(uname.length<4)
    {
      setUsererr(true)
    }
    else
    {
      setUsererr(false)
    }
    setName(uname)
  }
  function contactvalid(e)
  {
    let upass=e.target.value
    if(upass.length==10)
    {
      setPasserr(true)
    }
    else
    {
      setPasserr(false)
    }
    setContact(upass)
  }  
  return (
    <div>
      <center><h2>Contact Us</h2></center>
        <div class="box">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14906.633334877068!2d79.2535018!3d20.9260614!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4afaa64fc7651%3A0x9d5aba7f2ba2e63f!2sSenad%20Farm!5e0!3m2!1sen!2sin!4v1691666412766!5m2!1sen!2sin" style={{width:'500px',height:'300px'}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          <div class="col-lg-6">
            <div class="detail-box">
              <div class="heading_container">
              <form onSubmit={logininfo}>
                <label>Name:</label>
              <Form.Control type="text" placeholder="abc" value={name} onChange={(e)=>setName(e.target.value)}/>
              {name.length==0?<span style={{color:"red"}}>Please Enter Username</span>:null}<br/>
              <label>Contact:</label>
              <Form.Control type="number" placeholder="987654321" value={contact} onChange={(e)=>setContact(e.target.value)}/>
              {name.length==0?<span style={{color:"red"}}>Please Enter Contact</span>:null}<br/>
              <label>Email:</label>
              <Form.Control type="email" placeholder="name@example.com" value={email} onChange={(e)=>setEmail(e.target.value)} /><br/>
              <center><Button variant="danger" style={{textAlign:"center"}}>Send Message</Button>{' '}</center>
              </form>
              </div>
              {/* <p> */}
                {/* Qui ex dolore at repellat, quia neque doloribus omnis adipisci, ipsum eos odio fugit ut eveniet blanditiis praesentium totam non nostrum dignissimos nihil eius facere et eaque. Qui, animi obcaecati. */}
              {/* </p> */}
              <div class="btn-box">
              {/* <Button variant="danger">Buy Now</Button>{' '} */}
              {/* <Button variant="danger">See More</Button>{' '} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Information1