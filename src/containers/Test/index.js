import React, { Component } from 'react'
import User from '../User'

import Home from '../Home'
import './style.scss'
class Test extends Component {

  constructor(props) {
    super(props);
    this.state = {
      curTab: 0,
      doInitScroll: true,
    }
  }


  render(){
    const {curTab} = this.state
    
    return(
      <div className="react-container">
          <Home/>
        
      </div>
    )
  }
}

export default Test;