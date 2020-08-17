import React, { Component } from 'react';
import Button from '../Button/Button';
import Box from './Box/Box';
import "./Boxes.scss"
import Axios from 'axios';
class Boxes extends Component {
    state={
        show:false,
        input:null,
    }
    HandlerShow=()=>{
        this.setState({show:!this.state.show})
    }
    HandlerInput=(event)=>{
        event.preventDefault();
        console.log(event.target.value);
        this.setState({input:event.target.value})
    }
    DeletePost=()=>{
       console.log(this.state.input);
       Axios.delete(`https://jsonplaceholder.typicode.com/comments/`+this.state.input)
    .then(res => {
      console.log("DeletePost",res);
    })  
    .catch(error => console.log(error));
    }
    render() {
        console.log(this.state.show);
        return (
            <div className='Boxes'>
                {this.state.show ?<Box/>:null}
                <Button clicked={this.HandlerShow}>Pull Data</Button>
                {this.state.show ?(
                 <div>
                 <input type='text' onChange={(e)=>this.HandlerInput(e)}/>
                 <Button clicked={this.DeletePost}>Remove</Button>
                 </div>
               
                ):null}
            </div>
        );
    }
}

export default Boxes;