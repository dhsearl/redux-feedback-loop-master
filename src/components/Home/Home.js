import React, { Component } from 'react';
import { Button } from '@material-ui/core'


class Home extends Component {
    handleClick = () => {
        this.props.history.push("/PageOne");
    }
    componentDidMount(){
        // reset feedback
        // reset feedback input value
    }

    render() {
        return (
            <>
                <h1>Want to give feedback? </h1>
                {/* <Button color="primary" onClick={this.handleClick}>Yes</Button> */}
            </>

        )
    }
}

export default Home;