import React from 'react';
import Header from '../Components/Header.jsx'
import StickyFooter from '../Components/Footer.jsx'
import  Content from './RateContent'

function Rate(){
  return(
    <div style={{height:"85vh",margin:"0",padding:"0"}}>
      <Header/>
      <Content/>
      <StickyFooter/>
    </div>
  )
}
export default Rate