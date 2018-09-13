import React, { Component } from 'react'

export default class Prep extends Component {
    constructor() {
        super()
        this.state = {
            prep: "stir-fry"
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e) {
        const { value } = e.target;
        this.setState({
            prep: value
        })
    }
    render() {
        const { state } = this.props.location;
        const { history } = this.props;
        return (
            <div>
                <div id="prepSelectionsDiv">
                    <input checked={this.state.prep === "stir-fry"}
                        onChange={this.handleChange}
                        type="radio"
                        className="prep_radio_item"
                        value="stir-fry"
                        name="item"
                        id="prep_radio1" />
                    <label className="prep_label_item" id="prep1"
                        htmlFor="prep_radio1">Stir-fry</label>

                    <input checked={this.state.prep === "soup"}
                        onChange={this.handleChange}
                        type="radio"
                        className="prep_radio_item"
                        value="soup"
                        name="item"
                        id="prep_radio2" />
                    <label className="prep_label_item" id="prep2"
                        htmlFor="prep_radio2">Soup</label>

                    <input checked={this.state.prep === "casserole"}
                        onChange={this.handleChange}
                        type="radio"
                        className="prep_radio_item"
                        value="casserole"
                        name="item"
                        id="prep_radio3" />
                    <label className="prep_label_item" id="prep3"
                        htmlFor="prep_radio3">Casserole</label>

                    <input checked={this.state.prep === "baking"}
                        onChange={this.handleChange}
                        type="radio"
                        className="prep_radio_item"
                        value="baking"
                        name="item"
                        id="prep_radio4" />
                    <label className="prep_label_item" id="prep4"
                        htmlFor="prep_radio4">Bake</label>


                </div>
                    <div className="arrowButtonsDiv">
                        <button className="backButton"
                            onClick={() => history.push('/')}>&larr;Back</button>
                        <button className='nextButton'
                            onClick={() => this.props.history.push({
                                pathname: "/meal",
                                state: {...state, ...this.state}
                            })}>Next&rarr;</button>
                    </div>
            </div>
        )
    }
}
