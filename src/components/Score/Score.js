import React, { Component } from 'react';
import Button from '@material-ui/core/Button'




class Score extends Component {

        

        render() {
                return (
                        <>
                        
                        <Button color="secondary">{this.props.number}/10</Button>
                        </>
       
                )
            }
        }


export default (Score);