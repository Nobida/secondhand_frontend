import React from 'react';
import {Link} from 'react-router-dom';
import Avatar from '../components/Avatar';
import Icon from '../components/Icon';
import Button from '../components/Button';
import IconButton from '../components/IconButton';
import { bookS, question, setting, note, comment, shelf, userAdd,menu,gift } from "../svg";
import './style.scss';

class UserHead extends React.Component {
  render() {
    const { user_info, score, punch } = this.props;
    return (
      <div className="user-head">
        <Avatar size="lg" />
        <div className="nickname"></div>
        <div className='user-info'>
          <div className="info-item">
            <span> 考勤 &nbsp; </span><span><b>{punch}</b></span>
          </div>
          <div className="info-item">
            <span> 积分 &nbsp; </span> <span><b>{score}</b></span>
          </div>
        </div>
      </div>

    );
  }
}

class UserTools extends React.Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className="tools">
        <div className="tool-icon">
            <Icon icon={shelf}/>
            <div className="label">我的课程</div>
        </div>
        <div className="tool-icon">
            <Icon icon={menu}/>
            <div className="label">我的订单</div>
        </div>
        <div className="tool-icon">
            <Icon icon={bookS}/>
            <div className="label">积分兑换</div>
        </div>
        <div className="tool-icon">
            <Icon icon={comment}/>
            <div className="label">学员须知</div>
        </div>
        <div className="tool-icon">
            <Icon icon={note}/>
            <div className="label">我的笔记</div>
        </div>
        <div className="tool-icon">
            <Icon icon={question}/>
            <div className="label">我的问题</div>
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
        <div className="user">     
          <UserHead
            user_info={user_info}
            punch={0}
            score={0}
          />
          <UserTools/>


        </div>
      </div>
    );
  }
}
