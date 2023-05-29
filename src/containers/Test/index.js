import React, { Component } from 'react'
import User from '../User'
import InputAddress from '../InputAddress'
import Home from '../Home'
import './style.scss'


class Geo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }

  componentDidMount() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        this.handleSuccess,
        this.handleError
      );
    } else {
      this.setState({ error: '浏览器不支持地理定位。' });
    }
  }

  handleSuccess = (position) => {
    const { latitude, longitude } = position.coords;
    this.setState({ latitude, longitude });
  };

  handleError = (error) => {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        this.setState({ error: '用户拒绝地理定位请求。' });
        break;
      case error.POSITION_UNAVAILABLE:
        this.setState({ error: '位置信息不可用。' });
        break;
      case error.TIMEOUT:
        this.setState({ error: '获取地理位置超时。' });
        break;
      case error.UNKNOWN_ERROR:
        this.setState({ error: '发生未知错误。' });
        break;
      default:
        this.setState({ error: '发生错误。' });
        break;
    }
  };

  render() {
    const { latitude, longitude, error } = this.state;

    return (
      <div>
        {error ? (
          <p>{error}</p>
        ) : (
          <>
            <p>纬度: {latitude}</p>
            <p>经度: {longitude}</p>
          </>
        )}
      </div>
    );
  }
}


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
          <Geo/>
        
      </div>
    )
  }
}

export default Test;