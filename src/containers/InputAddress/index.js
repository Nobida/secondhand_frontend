import React, { Component } from 'react'
import Button from '../../components/Button';


class InputButton extends React.Component {
    render() {
      
      return (
        <div className="task-button">
          <Button/>
        </div>
        );
    }
  }

class InputAddress extends Component {

  render(){

    return(
      <div className="react-container">
          填写取件信息
          <InputButton/>
      </div>
      
    )
  }
}

export default InputAddress;