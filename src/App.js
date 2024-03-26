import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import {Button, Col, Container, Row } from 'react-bootstrap';
import { arr } from './data/Blog';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faList } from '@fortawesome/free-solid-svg-icons';

import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import BtnModule from "./button.module.css";

function App() {

  let [pstatus,setpstatus]=useState(false);
  let [menu,setmenu]=useState(false);


        
        
        

  return (

        <>
        <button style={{background:'yellow',color:'black'}} onClick={()=>{setmenu(!menu)}}><FontAwesomeIcon icon={faList} />
          </button>
        <div className={menu?"activemenu":"menu1"}>
       
          <ul>
          
            <li>home</li>
            <li>feedback</li>
            <li>about us</li>
            <li>gallery</li>
            <li>portfolio</li>
            <li>contact</li>
          </ul>
        </div>
        <input type={pstatus?'text':'password'}/> <button onClick={()=>{setpstatus(!pstatus)}}>show</button>
        <br/>
        <button className={BtnModule.error}>error</button>
        <button className={BtnModule.warning}>warning</button>

        </>
        
          

  )
     
    
}

export default App;




