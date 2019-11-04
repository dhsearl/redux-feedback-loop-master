import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Typography } from '@material-ui/core'

class Home extends Component {

    componentDidMount(){
        this.props.dispatch({type:"SET", payload:0})
    }

    render() {
        return (
            <>
                <Typography variant="h4">Ready?</Typography>
            </>

        )
    }
}

export default connect()(Home);