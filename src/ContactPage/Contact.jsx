import React from 'react';
import Header from '../Components/Header'
import StickyFooter from "../Components/Footer"
import Contactinfo from './Contactpage'


function contact(){
  return(
    <div style={{height:"85vh",margin:"0",padding:"0"}}>
        <Header/>
        <Contactinfo/>
        <StickyFooter/>
    </div> 
  )
}
export default contact