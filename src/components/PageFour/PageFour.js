import React, { Component } from 'react';
import { connect } from 'react-redux'
import TextField from '@material-ui/core/TextField';
import './PageFour.css'
// import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
        container: {
          display: 'flex',
          flexWrap: 'wrap',
        },
        textField: {
          marginLeft: theme.spacing.unit,
          marginRight: theme.spacing.unit,
          width: "50%",
        },
      });

class PageFour extends Component {
        

        handleChange=(event) => {
                this.props.dispatch({type:"ADD", payload:{property:"comments", value: event.target.value}});
        }

        handleClick = () => {

                this.props.history.push("/Review");
        }


        render() {
                const { classes } = this.props;
                return (
                        <>
                        <h1>Hello page four</h1>
                        <form className={classes.container} >
                        <pre>{JSON.stringify(this.props,null,2)}</pre>
                        
                        <TextField
                        id="filled-textarea"
                        label="Additional Comments"
                        placeholder="I want you to know..."
                        multiline
                        className={classes.textField}
                        value={this.props.feedbackReducer.comments}
                        onChange={this.handleChange}
                        margin="normal"
                        variant="filled"
                        />
                        </form>
                        <button onClick={this.handleClick}>Click to review</button>
                        </>
       
                )}}

const mapReduxStateToProps = (reduxState) => {
        return reduxState
}
export default connect(mapReduxStateToProps)(withStyles(styles)(PageFour));