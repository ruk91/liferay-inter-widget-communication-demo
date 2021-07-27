import React, { Component } from 'react'
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name: ""};
  }
  handleEvent = (event) => {
    this.setState({
      name: event.name
    })
  };
  componentDidMount() {
    window.Liferay.on('eventName',this.handleEvent);
  }
  render() {
    console.log("ready to get data")
    const {name, age} = this.state
    return (
      <div>
          {name && <p>Hello <b>{name}</b></p>}
      </div>
    )
  }
}
