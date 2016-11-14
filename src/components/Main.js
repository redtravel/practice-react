require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';


class AppComponent extends React.Component {
  render() {
      return (
              <h1>Hello, {this.props.name}</h1>
    );
  }
}

AppComponent.defaultProps = {
};

export class Test extends React.Component {
    render(){
        return (
                <h1>Hello, {this.props.name}</h1>
        )
    }
}

export default AppComponent;
