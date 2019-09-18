import React from 'react';
import { Welcome } from '../welcome'

export class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isWelcome: true
    };
  }
  handleClick () {
    this.setState({
      isWelcome: false
    });
  }
  render () {
    return (
      <div>
        {
          this.state.isWelcome
            && (<Welcome onClick={this.handleClick.bind(this)} name="React"/>) || null
        }
      </div>
    );
  }
};