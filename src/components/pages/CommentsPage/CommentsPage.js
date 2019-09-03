import React, { Component } from 'react';
import { connect } from 'react-redux';


class CommentsPage extends Component {

    state = {
        comments: ''
    }

    enterValue = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    onNextClick = (event) => {
        // dispatch this value to a reducer
        this.props.dispatch({type: 'SET_COMMENTS', payload: this.state.comments})
        this.props.history.push('/overview');
    }

    render() {
        return (
            <div>
                <h1>Additional Comments</h1>
                <h5>What do you want us to know?</h5>
                <input type="text" onChange={this.enterValue} />
                <button onClick={this.onNextClick}>Next</button>
            </div>
        )
    }
}

const mapStoreToProps = (store) => {
    return {
        store
    }
}

export default connect(mapStoreToProps)(CommentsPage);