import React, { Component } from 'react'
import { TabItem, TabContainer } from '../../components/Tabs'
import MainContainer from '../MainContainer'
import Button from '../../components/Button';
import Card from '../../components/Card';
import Tag from '../../components/Tag';
import './style.scss';

class Map extends React.Component {
  render() {
    
    return (
      <div className="map">
        <Card bg={'http://upload.art.ifeng.com/2015/0713/1436758083821.jpg'} >
          <div className='course-name'>{this.props.name}</div>
          <div className='desc'>{this.props.desc?this.props.desc.split('/')[0]:''}</div>
        </Card>
      </div>
      );
  }
}


class TaskLocation extends React.Component {
  render() {
    
    return (
      <div className="task-location">
        task-location
      </div>
      );
  }
}

class TaskButton extends React.Component {
  render() {
    
    return (
      <div className="task-button">
        <Button/>
      </div>
      );
  }
}

class Introduction extends React.Component {
  render() {
    
    return (
      <div className="introduction">
        
      </div>
      );
  }
}


class TaskContainer extends React.Component {
  render() {
    
    return (
      
      <div className="task-container">
          <div className='task-item'>
          <div className="tag-list">
             <Tag size="sm"  type="primary">sss</Tag>
             <Tag size="sm">sss</Tag>
             <Tag size="sm">sss</Tag>
          </div>
         </div>
         <TaskLocation/>
         <TaskLocation/>
         <TaskButton/>
         <Introduction/>
      </div>
      );
  }
}


class Home extends Component {

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
      <div>
        <Map/>
        <MainContainer/>
        <TaskContainer/>
        
      </div>
    )
  }
}

export default Home;