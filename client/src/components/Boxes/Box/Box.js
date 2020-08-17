import React, { Component } from "react";
import "./Box.scss";
import Axios from "axios";
class Box extends Component {
  state={
      data:[]
  }
  // showBox =()=>{
  //   this.setState({show:true})
  // }
  componentDidMount(){
    Axios.get(` https://jsonplaceholder.typicode.com/comments`)
    .then(res => {
      this.setState({data:res.data})
    })
    .catch(error => console.log(error));
  }
  render() {
      console.log(this.state.data);
    return (
      <div className="Box">
        {this.state.data.map((item)=>{
           return <p key={item.id}>{item.id} : {item.email}</p>
        })}
      </div>
    );
  }
}

export default Box;
