import React from 'react'
import { useState } from 'react';
import { Component } from 'react'

// Updatation based on class component

export class ChangeState extends Component{
    constructor(props) {
        super(props);
        this.state = {text: "Initial text"}
    }
    update(e) {
        this.setState({text: e.target.value})
    }
    render() {
        return(
            <>
                <h1>State Example</h1>
                <h2>{this.state.text}</h2>
                <input type="text" onChange={this.update.bind(this)} />
            </>
        );
    }
}


//Updatation using functional component

    const ChangedState = () => {
    const [state, setState] = useState("Initial State")

    const Changed = (e) => {
        setState(e.target.value)
    }
  return (
    <>
      <h1>State Example</h1>
      <h2>{state}</h2>
      <input type="text" onChange={Changed} />
    </>
  )
}

export default ChangedState

