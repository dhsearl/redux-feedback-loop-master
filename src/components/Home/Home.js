import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Typography } from '@material-ui/core'
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
                {/* <h1>Ready?</h1> */}
                <Typography variant="h4">Ready?</Typography>
            </>

        )
    }
}

export default connect()(Home);