import React from 'react';
import Header from '../Components/Header'
import StickyFooter from "../Components/Footer"

import Posts from './posts';




function contact(){
  return(
    <div style={{height:"85vh",margin:"0",padding:"0"}}>
        <Header/>
        <Posts/>
        <StickyFooter/>
    </div> 
  )
}
export default contact