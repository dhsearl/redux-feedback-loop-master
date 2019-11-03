import React, { Component } from 'react';
import { Button, Typography } from '@material-ui/core'
import { connect } from 'react-redux'
import axios from 'axios'




class Footer extends Component {

    state = {
        activeStep: 0,
    };

    handleNext = () => {
        this.props.dispatch({ type: "NEXT" })
        this.getPage(this.props.stepReducer + 1)
    };

    handleBack = () => {
        this.props.dispatch({ type: "BACK" })
        this.getPage(this.props.stepReducer - 1)
    };

    handleSubmit = () => {
        // POST feedback, reset page values, goto success page
        axios.post('/feedback', this.props.feedbackReducer)
            .then(() => {
                this.props.dispatch({ type: "CLEAR" })
                this.props.dispatch({ type: "NEXT" })
                this.getPage(6)
            })
            .catch((error) => {
                alert("Error sending feedback to database");
                console.log("POST error was", error);
            })
    }

// Footer controls the page view and holds all the buttons
    getPage = (step) => {
        switch (step) {
            case 0:
                this.props.history.push("/");
                break;
            case 1:
                this.props.history.push("/PageOne");
                break;
            case 2:
                this.props.history.push("/PageTwo");
                break;
            case 3:
                this.props.history.push("/PageThree");
                break;
            case 4:
                this.props.history.push("/PageFour");
                break;
            case 5:
                this.props.history.push("/Review");
                break;
            case 6:
                this.props.history.push("/Success");
                break;
            default:
                return 'Unknown step';
        }
    }

    render() {

        const activeStep = this.props.stepReducer;
        console.log("active step is", activeStep);


        return (
            <>
                {/* Just show back to home on page 6 */}
                {this.props.stepReducer === 6 ? (

                    <div>
                        <Typography>
                            All steps completed - you&apos;re finished
                        </Typography>
                        <Button color="secondary" onClick={() => this.getPage(0)}>Click to write new feedback</Button>
                    </div>
                ) : (
                <div>

                        {/* Only show back once the survey has started. Only allow it after you've gone forward once. */}
                        {this.props.stepReducer > 1 &&
                            <Button
                                disabled={this.props.stepReducer === 1}
                                onClick={this.handleBack}>
                                Back
                                </Button>}
                        {/* Show Next or Review for most pages */}
                        {this.props.stepReducer < 5 &&
                            <Button
                                variant="contained"
                                color="primary"
                                disabled={Number(activeStep < 5 && !this.props.allowNextReducer[activeStep])}
                                onClick={this.handleNext}>
                                {Number(activeStep) === 4 ? 'Review' : 'Next'}
                            </Button>}
                        {/* Just show submit on page 5 */}
                        {this.props.stepReducer === 5 &&
                            <Button
                                onClick={this.handleSubmit}>
                                Submit
                            </Button>}
                        <pre>{activeStep}</pre>
                        <pre>{JSON.stringify(this.props, null, 2)}</pre>


                    </div>
            )}
            </>

        );
    }
}
const mapReduxStateToProps = (reduxState) => {
    return reduxState
}
export default connect(mapReduxStateToProps)(Footer);