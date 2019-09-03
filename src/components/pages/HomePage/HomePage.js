import React, { Component } from 'react';

class HomePage extends Component {

    onBeginClick = (event) => {
        this.props.history.push('/feeling')
    }

    render() {
        return (
            <div>
                <h1>HOME PAGE</h1>
                <button onClick={this.onBeginClick}>Begin Feedback</button>
            </div>
        )
    }
}

export default HomePage;