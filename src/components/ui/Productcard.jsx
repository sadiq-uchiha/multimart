import React from 'react'
import { motion } from 'framer-motion'
import '../../styles/productcard.css'
import {Link} from 'react-router-dom'
import {Col} from 'reactstrap'
import {useDispatch} from 'react-redux'
import { cartActions } from '../../redux/slices/cartSlice'

const Productcard = ({item}) => {
        const dispatch = useDispatch()
        const addToCart =()=>{
            dispatch(cartActions.addItem({
                id: item.id,
                productName: item.productName,
                price: item.price,
                image: item.imgUrl, 
            }))
            alert('product added')
        }
  return ( 
    <>
    <Col lg='3' md='4' className='mb-2'>
        <div className="productitem">
        <div className="productimg">
            {/* incase add image here */}
            <motion.img whileHover={{scale: 0.9}} src={item.imgUrl} alt="chair" />
        </div>
        <div className="p-2 productinfo"> 
        <motion.h3 whileHover={{scale: 1.1}} className="productname">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
        </motion.h3>
        <span className='text-start d-block ' >{item.category}</span>
        </div>
        <div className="productcardbtm d-flex align-items-center justify-content-between p-2">
            <span className="price">₹ {item.price}</span>
            <motion.span whileTap={{scale: 1.2}} onClick={addToCart} >
                <i class="ri-add-line" ></i>
            </motion.span>
        </div>
    </div>
    </Col>
    </>
  )
}

export default Productcard