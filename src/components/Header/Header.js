// import React, { Component } from 'react';
// import { connect } from 'react-redux'

// class Header extends Component {
//   render() {
//     return (

//         // <header className="App-header">
//         //   <h1 className="App-title">Feedback!</h1>
//         //   <h4><i>Don't forget it!</i></h4>
//         // </header>

//     );
//   }
// }
// const mapReduxStateToProps = (reduxState) => {
//     return reduxState
// }
// export default connect(mapReduxStateToProps)(Header);
import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux'

const styles = theme => ({
    root: {
        width: '90%',
    },
    button: {
        marginRight: theme.spacing.unit,
    },
    instructions: {
        marginTop: theme.spacing.unit,
        marginBottom: theme.spacing.unit,
    },
});

function getSteps() {
    return ['Feelings', 'Understanding', 'Support', 'Comments', 'Review'];
}

function getStepContent(step) {
    switch (step) {
        case 0:
            return 'How do you really feel?';
        case 1:
            return 'What IS true knowledge anyways?';
        case 2:
            return 'Luke is proud of you.';
        case 3:
            return 'Last chance to get it out';
        case 4:
            return 'How does it look?';
        default:
            return 'Unknown step';
    }
}

class Header extends Component {

    render() {

        const steps = getSteps();

        return (
            <header className="App-header">
                <h1 className="App-title">Feedback!</h1>
                <Box display={{ xs: 'none',sm: 'block' }}>
                    <Stepper activeStep={this.props.stepReducer} >
                        {steps.map((label, index) => {
                            const props = {};
                            const labelProps = {};
                            return (
                                <Step key={label} {...props}>
                                    <StepLabel {...labelProps}>{label}</StepLabel>
                                </Step>
                            );
                        })}
                    </Stepper>
                </Box>
            </header>


        );
    }
}

const mapReduxStateToProps = (reduxState) => {
    return reduxState
}


export default connect(mapReduxStateToProps)(withStyles(styles)(Header));