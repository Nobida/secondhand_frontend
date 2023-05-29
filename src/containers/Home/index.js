import React, { Component } from 'react'
import { TabItem, TabContainer } from '../../components/Tabs'
import MainContainer from '../MainContainer'
import Button from '../../components/Button';
import Card from '../../components/Card';
import Tag from '../../components/Tag';
import './style.scss';



import GoogleMapReact from 'google-map-react';



function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 17
  };

  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
      >
      </GoogleMapReact>
    </div>
  );
}










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

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
    };
  }

  handleChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('输入的值：', this.state.inputValue);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          填写取件地址
          <input
            type="text"
            value={this.state.inputValue}
            onChange={this.handleChange}
          />
        </label>
      </form>
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
        帮送服务流程
      </div>
      );
  }
}


class TaskContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contents: '', showToast: false };
  }



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
         <SimpleMap/>
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
        
        <MainContainer/>
        <TaskContainer/>
        
      </div>
    )
  }
}

export default Home;