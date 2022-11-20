import React,{useRef,useEffect} from 'react'
import './header.css'
import {Container,Row} from 'reactstrap';
import logo from '../../assets/images/eco-logo.png'
import {NavLink} from 'react-router-dom'
import usericon from '../../assets/images/user-icon.png'
import { motion } from "framer-motion"
import 'bootstrap/dist/css/bootstrap.css';

const navlink=[{
  path: 'home',
  display: 'Home'
},
{
  path: 'shop',
  display: 'Shop'
},
{
  path: 'cart',
  display: 'Cart'
},]
const Header = () => {

  const headerRef = useRef(null)

  const stickyHeaderFunc = () =>{
    window.addEventListener('scroll', ()=>{
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('stickyheader')
      }
      else{
        headerRef.current.classList.remove('stickyheader')
      }
    })
  }

  useEffect(() => {
    stickyHeaderFunc()
    return () => {
      window.removeEventListener('scroll',stickyHeaderFunc)
    };
  })

  return (
    <header className='header' ref={headerRef} >
      <Container>
        <Row>
          <div className='navwrapper' >
            <div className="logo"> 
              <img src={logo} alt="logo" />
              <div>
                <h1>Multimart</h1>
              </div>
            </div>
            <div className='navigation'>
               <ul className='menu'>
               {
                navlink.map((item,index) =>(
                  <li className="navitem" key={index}>
                    <NavLink to={item.path} className={(navClass)=> navClass.isActive? 'navactive':''} >{item.display}</NavLink>
                  </li>
                ))
               }
               </ul>
            </div>
            <div className="navicons">
               <span className="favicon"><i class="ri-heart-line"></i>
               <span className="badge">1</span>
               </span>
              <span className="carticon"><i class="ri-shopping-bag-line"></i>
              <span className="badge">1</span>
              </span>
            <span><motion.img whileTap={{scale: 1.2}} src={usericon} alt="" /></span>
            <div className="mobilemenu">
              <span><i class="ri-menu-2-line"></i></span>
            </div>
            </div>
          </div>
        </Row>
      </Container>

    </header> 
  )
}

export default Header