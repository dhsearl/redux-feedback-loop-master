
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Box from '@material-ui/core/Box';
// import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'

const styles = theme => ({
    root: {
        width: '90%',
    },
    
});

function getSteps() {
    return ['Feelings', 'Understanding', 'Support', 'Comments', 'Review'];
}

class Header extends Component {

    render() {

        const steps = getSteps();

        return (
            <header className="App-header">
                <h1 className="App-title">Feedback!</h1>

                {/* Show Stepper only if we're off the main page */}
                {this.props.stepReducer !== 0 && this.props.stepReducer !==6 &&  
                <Box display={{ xs: 'none',sm: 'block' }}>
                    <Stepper activeStep={this.props.stepReducer-1} >
                        {steps.map((label, index) => {
                            const props = {};
                            const labelProps = {};
                            return (
                                <Step key={label} {...props}>
                                    <StepLabel styles={{color:"white"}} {...labelProps}>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                </Box>}
            </header>


        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}


export default connect(mapReduxStateToProps)(withStyles(styles)(Header));