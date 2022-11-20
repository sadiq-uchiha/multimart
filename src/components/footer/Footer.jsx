import React from 'react';
import './footer.css'
import {Container, Row, Col,ListGroup,ListGroupItem} from 'reactstrap'
import {Link} from 'react-router-dom'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer  className='footer'>
      <Container>
        <Row>
          <Col lg='4'>
          <div className="logo"> 
          <i class="ri-shopping-bag-3-fill"></i>
              <div>
                <h1 className=' text-white'>Multimart</h1>
              </div>
            </div>
            <p className="footertext mt-4">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                Eaque iste minus culpa velit illo   dicta excepturi 
                ipsum cumque error natus!
              </p>
          </Col>
          <Col lg='3'>
            <div className="footerquicklinks">
              <h4 className="qlititle">Top Categories</h4>
              <ListGroup className=' mb-3'>
                <ListGroupItem className=' ps-0 border-0'>
                  <Link to='#/'>Mobile Phones</Link>
                </ListGroupItem>
                <ListGroupItem className=' ps-0 border-0'>
                  <Link to='#/'>Modern Sofa</Link>
                </ListGroupItem>
                <ListGroupItem className=' ps-0 border-0'>
                  <Link to='#/'>Arm Chair</Link>
                </ListGroupItem>
                <ListGroupItem className=' ps-0 border-0'>
                  <Link to='#/'>Smart Watches</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='2'>
          <div className="footerquicklinks">
              <h4 className="qlititle">Usefull Links</h4>
              <ListGroup className=' mb-3'>
                <ListGroupItem className=' ps-0 border-0'>
                  <Link to='#/'>Shop</Link>
                </ListGroupItem>
                <ListGroupItem className=' ps-0 border-0'>
                  <Link to='#/'>Cart</Link>
                </ListGroupItem>
                <ListGroupItem className=' ps-0 border-0'>
                  <Link to='#/'>LogIn</Link>
                </ListGroupItem>
                <ListGroupItem className=' ps-0 border-0'>
                  <Link to='#/'>Privacy Policy</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='3'>
          <div className="footerquicklinks">
              <h4 className="qlititle">Contacts</h4>
              <ListGroup className=' mb-3'>
                <ListGroupItem className=' ps-0 border-0'>
                  <div><i class="ri-map-pin-line"></i></div>
                  <Link to='#/'>Abc town, DEF city, XYZ state</Link>
                </ListGroupItem>
                <ListGroupItem className=' ps-0 border-0'>
                  <div><i class="ri-phone-line"></i></div>
                  <Link to='#/'>123-456789012</Link>
                </ListGroupItem>
                <ListGroupItem className=' ps-0 border-0'>
                  <div><i class="ri-mail-line"></i></div>
                  <Link to='#/'>abc@defmail.com</Link>
                </ListGroupItem>
                <ListGroupItem className=' ps-0 border-0'>
                  <div><i class="ri-headphone-line"></i></div>
                  <Link to='#/'>121212 Toll Free Help Line</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='12'>
            <p className="footercopyright">
             <span><i class="ri-copyright-line"></i></span> Copyright {year} developed by SADIQ MD. All rights reserved
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer