import React from 'react';
import Header from '../Components/Header.jsx'
import StickyFooter from '../Components/Footer.jsx'
import RulesContent from './RulesContent'

function Rules(){
  return(
    <div style={{height:"85vh",margin:"0",padding:"0"}}>
      <Header/>
      <RulesContent/>
      <StickyFooter/>
    </div>
  )
}
export default Rules