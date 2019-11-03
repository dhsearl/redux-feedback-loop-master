import React, { Component } from 'react';
import { connect } from 'react-redux'

class Home extends Component {
    handleClick = () => {
        this.props.history.push("/PageOne");
    }
    componentDidMount(){
        this.props.dispatch({type:"SET", payload:0})
    }

    render() {
        return (
            <>
                <h1>Ready?</h1>

            </>

        )
    }
}

export default connect()(Home);