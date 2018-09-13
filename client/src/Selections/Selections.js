import React, { Component } from 'react'
import Gender from './Gender.js';
import Intent from './Intent.js';
import Type from './Type.js';

export default class Selections extends Component {
    constructor(){
        super()
        this.state = {
            gender: "",
            intent: "",
            type: ""
        }
        this.handleChange=this.handleChange.bind(this);
    }
    handleChange(e){
        const { name, value } = e.target;
        this.setState({
            [name] : value
        })
    }
    render() {
        console.log(this.state)
        // pass both state and handle change function down into their respective components via props
        const {gender, intent, type} = this.state;
        return (
            <div id="selectionsDiv">
                <Gender handleChange={this.handleChange}
                            gender={gender}/>
                <Intent handleChange={this.handleChange}
                            intent={intent}/>
                <Type   handleChange={this.handleChange}
                            type={type}/>

                <div className="arrowButtonsDiv">
                    <button className='nextButton'
                        onClick={()=> this.props.history.push({
                            pathname: '/prep',
                            state: this.state
                        })}>Next&rarr;</button>
                </div>

            </div>
        )
    }
}
