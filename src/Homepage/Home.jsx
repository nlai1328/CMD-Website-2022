import React from 'react';
import Header from '../Components/Header'
import StickyFooter from "../Components/Footer"
import MainContent from './Content1'

function Home(){
  
  return(
    
    <div style={{height:"85vh",margin:"0",padding:"0"}}>
      <Header/>
      <MainContent/>
      <StickyFooter/>
    </div> 
  )
}
export default Home