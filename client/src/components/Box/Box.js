import React, { Component } from 'react';
import classes from "./Box.scss"
import Button from '../Button/Button';
class Box extends Component {
    state={
        show:false,
    }
    showBox =()=>{
      this.setState({show:true})
    }
    render() {
        return (
            <div>
            this.state.show?{<div className={classes.Box}>
                this.props.children
            </div>}:null
            <Button onClick={this.showBox}/>
            </div>
        );
    }
}

export default Box;