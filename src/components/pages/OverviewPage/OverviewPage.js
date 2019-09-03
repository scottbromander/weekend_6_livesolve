import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class OverviewPage extends Component {

    submitFeedback = () => {

        const dataObject = {
            feeling: this.props.store.feedbackReducer.feeling,
            understanding: this.props.store.feedbackReducer.understanding,
            supported: this.props.store.feedbackReducer.supported,
            comments: this.props.store.feedbackReducer.comments
        }

        axios({
            method: 'POST',
            url: '/feedback',
            data: dataObject
        }).then((response) => {
            this.props.history.push('/');
        })
    }

    render() {
        return (
            <div>
                <p>Feeling: {this.props.store.feedbackReducer.feeling}</p>
                <p>Understanding: {this.props.store.feedbackReducer.understanding}</p>
                <p>Supported: {this.props.store.feedbackReducer.supported}</p>
                <p>Comments: {this.props.store.feedbackReducer.comments}</p>
                <button onClick={this.submitFeedback}>Submit Feedback!</button>
            </div>
        )
    }
}

const mapStoreToProps = (store) => {
    return {
        store
    }
}

export default connect(mapStoreToProps)(OverviewPage);