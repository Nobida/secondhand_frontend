import React, { Component } from 'react'
import { TabItem, TabContainer } from '../components/Tabs'
import MainContainer from './MainContainer'
import CardList from './CardList'

class App extends Component {

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
        <TabContainer className="tabs-fixed-top" activeItem={this.state.curTab} >
        </TabContainer>
        <MainContainer/>
        <CardList/>
      </div>
    )
  }
}

export default App;