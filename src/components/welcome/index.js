import React from 'react';

export class Welcome extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      date: new Date()
    }

    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount () {
    setInterval(() => {
      this.setState({
        date: new Date
      });
    }, 1000);
  }
  componentWillUnmount () {
    console.log('Пиздец');
  }
  handleClick () {
    console.log(this.state.date)
  }
  render () {
    return (
      <h1>Hello {this.props.name}! Now is {this.state.date.toLocaleTimeString()}</h1>
    )
  }
}