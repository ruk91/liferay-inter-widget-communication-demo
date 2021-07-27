import React, { Component } from 'react'
import './App.css';
import { Button, Input } from 'reactstrap';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }
  onChangeName=(e)=> {
    this.setState({
      name: e.target.value
    })
  }
  click=()=> {
    const {name} = this.state
    console.log("name", name);
    window.Liferay.fire('eventName',{
      name:name
  });
  }
  render() {
    return (
      <div>
          <Input type="text" name="email" id="exampleEmail" placeholder="Enter your name" onChange={this.onChangeName} />
          <Button color="danger" onClick={this.click}>danger</Button>
      </div>
    )
  }
}
