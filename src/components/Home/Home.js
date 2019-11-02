import React, { Component } from 'react';
import { Button } from '@material-ui/core'


class Home extends Component {
    handleClick = () => {
        this.props.history.push("/PageOne");
    }


    render() {
        return (
            <>
                <h1>Want to give feedback? </h1>
                <Button color="primary" onClick={this.handleClick}>Yes</Button>
            </>

        )
    }
}

export default Home;