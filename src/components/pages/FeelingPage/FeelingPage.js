import React, { Component } from 'react';
import { connect } from 'react-redux';


class FeelingPage extends Component {

    state = {
        feelingScore: 0,
        warning: false,
        disableButton: true
    }

    enterValue = (event) => {
        const feelingScore = parseInt(event.target.value);

        if(feelingScore < 0 || feelingScore > 5 || event.target.value.length == 0){
            this.setState({
                warning: true,
                disableButton: true
            })
        } else {
            this.setState({
                feelingScore: feelingScore,
                warning: false,
                disableButton: false
            });
        }
    }

    onNextClick = (event) => {
        // dispatch this value to a reducer
        this.props.dispatch({type: 'SET_FEELING', payload: this.state.feelingScore})
        this.props.history.push('/understanding')
    }

    render() {

        let warnElement = <p className="warning">You must enter in a value between 1 and 5!</p>;

        if (this.state.warning == false) {
            warnElement = <div></div>
        }

        return (
            <div>
                <h1>Feeling</h1>
                <h5>How are you feeling today? 1 (not great) - 5 (great!)</h5>
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

export default connect(mapStoreToProps)(FeelingPage);