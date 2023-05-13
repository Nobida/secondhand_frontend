import React from 'react';
import {Link} from 'react-router-dom';
import Avatar from '../../components/Avatar';
import Icon from '../../components/Icon';
import Button from '../../components/Button';
import IconButton from '../../components/IconButton';
import { bookS, question, setting, note, comment, shelf, userAdd,menu,gift } from "../../svg";
import './style.scss';




class UserHead extends React.Component {
  render() {
    const { user_info, score, punch } = this.props;
    return (
      <div className="user-head">
        <Avatar size="lg" />
        <div className='user-info'>
          <div className='user-account-info'>
            <div className="user-nickname">Ali Motion</div>
            <div className='user-account'>@alihusnimotion</div>
            <div className='user-info-follow'>
              <div className="info-item">
                <span> <b>{punch}</b> &nbsp; </span><span>Follower</span>
              </div>
              <div className="info-item">
                <span> <b>{ score }</b> &nbsp; </span><span>Following</span>
              </div>
            </div>
          </div>

        </div>
      </div>

    );
  }
}



class UserTools extends React.Component {
  constructor(props) {
    super(props);
  }
  render(){
    return (
      <div className="ranking-item">
        <div className="left">
          My Work
        </div>
        <div className="right">
          》
        </div>
      </div>
    )
  }
}

export default class User extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    console.log('User did mount');
    
    
  }

  render() {
    console.log('User render');

    console.log(this.props)
    const { user_stat, user_info } = this.props;

    return (
      <div>
        <div>Profile</div>
        <div className="user">     
          <UserHead
            user_info={user_info}
            punch={0}
            score={0}
          />
          <UserTools/>
          <UserTools/>
          <UserTools/>
          <UserTools/>
          <Button/>


        </div>
      </div>
    );
  }
}
