import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Typography } from '@material-ui/core'


class Success extends Component {

    render() {
        return (
                <Typography variant="h3">Feedback Submitted</Typography>
        )
    }
}

export default connect()(Success);