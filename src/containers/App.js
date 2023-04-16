import React, { Component } from 'react'
import Card from '../components/Card'
import BottomTap from '../components/BottomTap'
import SearchInput from '../components/SearchInput'

export default class App extends Component {
  render() {
    return (
      <div className='wrapper'>
        <SearchInput />
        <Card />
        <BottomTap />
      </div>
    )
  }
}