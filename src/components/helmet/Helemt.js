import React from 'react'

const Helemt = (props) => {

    document.title='HDM-'+props.title
  return (
    <div className='w-100'>
        {props.children}
    </div>
  )
}

export default Helemt