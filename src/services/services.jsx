import React from 'react'
import {motion} from 'framer-motion'
import {Container, Row, Col} from 'reactstrap'
import './services.css'
import serviceData from '../assets/data/serviceData'

const Services = () => {
  return (
   <section>
   <Container>
    <Row>
      {
        serviceData.map((item,index)=>(
          <Col lg='3' md='4' key={index}>
          <motion.div whileHover={{scale: 1.1}} className="serviceitem" style={{background:`${item.bg}`}} >
            <span>
              <i class={item.icon} ></i>
            </span>
            <div>
              <h3>{item.title}</h3>
              <p> {item.subtitle}</p>
            </div>
          </motion.div>
          </Col>
        ))
      }
      {/* <Col lang='3' md='4'>
      <div className="serviceitem">
      <span> <i class='ri-truck-line'></i> </span>
      <div>
        <h3>Free Shipping</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
      </Col> */}
    </Row>
   </Container>
   </section>
  )
}

export default Services