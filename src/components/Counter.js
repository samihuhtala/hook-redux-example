import React, { Component} from 'react';
import NumberDisplay from './NumberDisplay';
class Counter extends Component {
    constructor(props){
        super(props);
        this.state = {number: 0};
    }

    handleplus =() => {
        this.setState({
            number: this.state.number+1
        })
    }
    handleMinus = () => {
        this.setState({
            number: this.state.number-1
        })
    }

 render()   {
     return(
         <div>
        <input type='button' value='+' onClick={this.handleplus } />
        <input type='button' value='-' onClick={this.handleMinus } />
        <NumberDisplay number={this.state.number} />
        </div>
     );
 }
}
export default Counter;