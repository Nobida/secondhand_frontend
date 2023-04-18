import React, { Component } from 'react'
import User from '../User'

class Test extends Component {

  constructor(props) {
    super(props);
    this.state = {
      curTab: 0,
      doInitScroll: true,
    }
  }

  componentDidMount() {
    const {history} = this.props;

  }

  render(){
    const {curTab} = this.state
    
    return(
      <div className="note-list-drawer">
          <User/>
        
      </div>
    )
  }
}

export default Test;