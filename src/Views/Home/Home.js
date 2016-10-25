import React, { Component } from 'react';
import { Link,RouterContext } from 'react-router';




const Home= React.createClass({
   contextTypes: {
    router: React.PropTypes.object.isRequired
  },
  getInitialState:()=>{
    return {code:null}
  },
  toResult:function(e){
      this.context.router.push('/realInfo/1231243423')
  },
  render(){
    // var list = [{active:false,text:'左边'},{active:true,text:'中间'}]
    return (
      <div>
      <p onClick={this.toResult}>shern</p>
      <p><Link to="/VirtualInfo/123123">max</Link></p>
      {this.props.children}
      </div>
    );
  }})

export default Home
