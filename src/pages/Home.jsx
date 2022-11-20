import React, {useState, useEffect} from 'react';
import Helemt from '../components/helmet/Helemt';
import heroImg from '../assets/images/hero-img.png' 
import '../styles/home.css'
import {Link} from 'react-router-dom'
import { motion } from 'framer-motion'
import Services from '../services/services';
import {Container, Row, Col} from 'reactstrap'
import Productionlist from '../components/ui/Productionlist';
import products from '../assets/data/products'
import counterImg from '../assets/images/counter-timer-img.png'
import Clock from '../components/ui/clock';

const Home = () => {
  const [trendingProducts,setTrendingProducts]= useState([])
  const [bestsales,setBestsales]= useState([])
  const year = new Date().getFullYear()
  const [mobileProducts,setmobileProducts] = useState([])
  const [wirelesProducts,setwirelessProducts] = useState([])
  const [popularProducts,setpopularProducts] = useState([])
  useEffect(()=>{
    const filteredTrendingproducts = products.filter(item =>item.category === 'chair');
    const filteredBestsales = products.filter(item =>item.category === 'sofa')
    const filteredmobileProducts = products.filter(item =>item.category === 'mobile');
    const filteredWirelessProducts = products.filter(item =>item.category === 'wireless');
    const filteredpopularProducts = products.filter(item =>item.category === 'watch')
    setTrendingProducts(filteredTrendingproducts);
    setBestsales(filteredBestsales);
    setmobileProducts(filteredmobileProducts);
    setwirelessProducts(filteredWirelessProducts);
    setpopularProducts(filteredpopularProducts);
  },[])

  return (
    <div>
      {/* dispalys on title that which page are you on */}
      <Helemt title={'Home'} />
      <section className="herosection">
      <div className="herocontent">
                <p className="herosubtitle">Trending product in {year}</p>
                <h2>Make your Minimalistic and Modern</h2>
                <p> Lorem ipsum dolor sit amet consectetur 
                 adipisicing elit. Facere recusandae mollitia 
                  nulla voluptatibus quidem sint voluptas quod
                   architecto. Hic eligendi iusto eaque pariatur 
                   fuga harum. Quo iusto molestiae voluptates corporis. </p>
                   <motion.button whileTap={{scale: 1.2}} className="buybtn">
                    <Link to='shop'>SHOP NOW</Link>
                    </motion.button>
              </div>

              <div className="heroimg">
                <img src={heroImg} alt="" />
              </div>
      </section>
      <Services />
      <section className="trendin gprod">
        <Container>
          <Row>
            <Col lg='12' >
              <h2 className="sectiontitle">Trending Products</h2>
            </Col>
            <Productionlist data={trendingProducts} />
          </Row>
        </Container>
      </section>
      <section className='bestsales' >
        <Container>
        <Row>
            <Col lg='12' >
              <h2 className="sectiontitle">Best Sales</h2>
            </Col>
            <Productionlist data={bestsales}/>
          </Row>
        </Container>
      </section>

      <section className="timercount">
      <Container>
        <Row>
            <Col lg='6' md='6' >
              <div className="clocktop-content">
                <h4 className=' text-white fs-6 mb-2 ' >Limited Offers</h4>
                <h3 className=' text-white fs-5 mb-3 ' >Quality Arm Chair</h3>
              </div>
              <Clock />
              <motion.button whileTap={{scale: 1.1}} className="buybtn" style={{border:'1px solid white'}}>
                <Link to='/shop'> Visit Store </Link>
              </motion.button>
            </Col>

            <Col lg='6' md='6' className='text-end' >
              <img src={counterImg} alt="" />
            </Col>
          </Row> 
        </Container>
      </section>

     <section className="newarrival">
     <Container>
        <Row>
            <Col lg='12' className=' text-center' >
              <h2 className="sectiontitle">New Arrivals</h2>
            </Col>
            <Productionlist data={mobileProducts}/>
            <Productionlist data={wirelesProducts}/>
          </Row>
        </Container>
     </section>

     <section className="popularcategory">
     <Container>
        <Row>
            <Col lg='12' className=' text-center' >
              <h2 className="sectiontitle">Popular In Category</h2>
            </Col>
            <Productionlist data={popularProducts}/>
          </Row>
        </Container>
     </section>

    </div>
  )
}

export default Home




