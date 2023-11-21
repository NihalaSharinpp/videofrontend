
import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from 'react-router-dom';


function Landingpage() {

  // useNavigate() is a hook
    const navigate=useNavigate()
  
   const handleNavigate=()=>{
     navigate('/home')
   }
   

  return (
    <div>

    <Row className='align-item-center'>

        <Col></Col>
        <Col lg={6}>

        <h1>Welcome to Video.com</h1>
        <p>Where user can use their favorite videos user can upload any youtube videos by copy and paste their url .video.com will allow to add and remove their uploaded videos and also arrange them in different categories by drag and drop.it is free. Try it now!!!!
            
        </p>
        <button onClick={handleNavigate} className='btn btn-success'>Click here to Know more!!!!</button>

        </Col>
        <Col lg={4}>
            <img className='img-fluid' src="https://krosbits.in/images/musicolet_round.png" alt="no image" />
        </Col>
        <Col></Col>
    </Row>


    </div>
  )
}

export default Landingpage