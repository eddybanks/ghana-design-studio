import React, { Component } from 'react'

class Header extends Component {
  constructor() {
    super()
    this.state = {
      title: "Ghana Design Studio"
    }
  }

  render() {
    return (
      <div>
        <header>
          <h1>{this.state.title}</h1>
        </header>
      </div>
    )
  }
}

export default Header