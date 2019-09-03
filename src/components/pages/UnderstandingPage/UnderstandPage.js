import React, { Component } from 'react';
import { connect } from 'react-redux';


class UnderstandingPage extends Component {

    state = {
        understandingScore: 0,
        warning: false,
        disableButton: true
    }

    enterValue = (event) => {
        const understandingScore = parseInt(event.target.value);

        if(understandingScore < 0 || understandingScore > 5 || event.target.value.length == 0){
            this.setState({
                warning: true,
                disableButton: true
            })
        } else {
            this.setState({
                understandingScore: understandingScore,
                warning: false,
                disableButton: false
            });
        }
    }

    onNextClick = (event) => {
        // dispatch this value to a reducer
        this.props.dispatch({type: 'SET_UNDERSTANDING', payload: this.state.understandingScore})
        this.props.history.push('/supported')
    }

    render() {

        let warnElement = <p className="warning">You must enter in a value between 1 and 5!</p>;

        if (this.state.warning == false) {
            warnElement = <div></div>
        }

        return (
            <div>
                <h1>Understanding</h1>
                <h5>How well did you understand the material today? 1 (not great) - 5 (great!)</h5>
                {warnElement}
                <input type="number" onChange={this.enterValue} />
                <button disabled={this.state.disableButton} onClick={this.onNextClick}>Next</button>
            </div>
        )
    }
}

const mapStoreToProps = (store) => {
    return {
        store
    }
}

export default connect(mapStoreToProps)(UnderstandingPage);