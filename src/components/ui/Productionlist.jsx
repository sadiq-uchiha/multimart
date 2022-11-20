import React from 'react'
import Productcard  from './Productcard'

const Productionlist = ({data}) => {
  return (
    <>
    {
      data?.map((item, index)=>(
        <Productcard item={item} key={index} />
      ))
    }
        
    </>
  )
}

export default Productionlist