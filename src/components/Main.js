import React, { Component } from 'react';
import { Link } from 'react-router';
// import Head from ''

export default class App extends Component {
  render() {
    return (
      <div>
       {this.props.children}
      </div>
    );
  }
}
