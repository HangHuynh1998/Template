import React, { Component } from 'react';
import Button from '../Button/Button';
import Box from './Box/Box';
import "./Boxes.scss"
class Boxes extends Component {
    state={
        show:false
    }
    HandlerShow=()=>{
        this.setState({show:!this.state.show})
    }
    render() {
        console.log(this.state.show);
        return (
            <div className='Boxes'>
                {this.state.show ?<Box/>:null}
                <Button clicked={this.HandlerShow}>Pull Data</Button>
            </div>
        );
    }
}

export default Boxes;