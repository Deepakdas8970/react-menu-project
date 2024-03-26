import React from 'react'
import './externel css.css';
// import logo from './images/l.png'

export default function Header({children}) {
 // let {lk,hi}=props; //destructering of props
  return (
        <div className='Header'>
          {children}
          hello
          {/* <img src={logo} alt="logo" width={50} height={40}/> */
          // <img  width={50} src="https://science.nasa.gov/wp-content/uploads/2023/06/webb-flickr-52259221868-30e1c78f0c-4k-jpg.webp" alt="" />
          
          }
          
        </div>
    
    
  )
}
