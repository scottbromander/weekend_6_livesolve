import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class AdminPage extends Component {

    state = {
        feedbackArray: []
    }

    componentDidMount() {
        axios({
            method: 'GET',
            url: 'feedback'
        }).then((response) => {
            this.props.dispatch({type: 'SET_ALL_FEEDBACK', payload: response.data})
        })
    }
    
    render() {

        const feedbackArray = this.props.store.allFeedbackReducer.map((item, index) => {
            return (
                <div key={index}>
                    <p>ID: {item.id}</p>
                    <p>FEELING: {item.feeling}</p>
                    <p>UNDERSTANDING: {item.understanding}</p>
                    <p>SUPPORTED: {item.support}</p>
                    <p>COMMENTS: {item.comments}</p>
                    <hr />
                </div>
            )
        })

        return (
            <div>
                {feedbackArray}
            </div>
        )
    }
}

const mapStoreToProps = (store) => {
    return {
        store
    }
}

export default connect(mapStoreToProps)(AdminPage);