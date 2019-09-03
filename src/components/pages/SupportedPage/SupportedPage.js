import React, { Component } from 'react';
import { connect } from 'react-redux';


class SupportedPage extends Component {

    state = {
        supportedScore: 0,
        warning: false,
        disableButton: true
    }

    enterValue = (event) => {
        const supportedScore = parseInt(event.target.value);

        if(supportedScore < 0 || supportedScore > 5 || event.target.value.length == 0){
            this.setState({
                warning: true,
                disableButton: true
            })
        } else {
            this.setState({
                supportedScore: supportedScore,
                warning: false,
                disableButton: false
            });
        }
    }

    onNextClick = (event) => {
        // dispatch this value to a reducer
        this.props.dispatch({type: 'SET_SUPPORTED', payload: this.state.supportedScore})
        this.props.history.push('/comments')
    }

    render() {

        let warnElement = <p className="warning">You must enter in a value between 1 and 5!</p>;

        if (this.state.warning == false) {
            warnElement = <div></div>
        }

        return (
            <div>
                <h1>Supported</h1>
                <h5>Did you feel supported today? 1 (no.) - 5 (Yerp!)</h5>
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

export default connect(mapStoreToProps)(SupportedPage);