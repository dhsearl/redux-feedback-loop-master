import React, { Component } from 'react';
import { connect } from 'react-redux'
import MaterialTable from 'material-table'
import { Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button } from '@material-ui/core'
import axios from 'axios';
import moment from 'moment'

class Admin extends Component {
    state = {
        fromDB: [],
        open: false,
    }

    componentDidMount() {
        // get data for page from database
        this.getData();
        // reset where you were (like page 0 and reset inputs)
        this.props.dispatch({ type: "SET", payload: 9 })
        this.props.dispatch({ type: "CLEAR" })
    }

    putFlag = (id) => {
        console.log(id);
        axios.put(`/feedback/${id}`)
            .then(() => {
                this.getData();
            })
            .catch((error) => {
                console.log("ERROR flagging", error);
            })
    }
    deleteRow = (id) => {
        console.log(id);
        axios.delete(`/feedback/${id}`)
            .then(() => {
                this.getData();
            })
            .catch((error) => {
                console.log("ERROR deleting", error);
            })
    }
    // Delete Dialog Handlers
    handleClickOpen = (id) => {
        this.setState({
            open: true,
            id: id,
        })
    };
    handleClose = () => {
        this.setState({
            open: false,
        })
    };
    handleCloseYes = () => {
        console.log("DELETING")
        this.setState({
            open: false,
        });
        this.deleteRow(this.state.id);
    };
    getData = () => {
        axios.get('/feedback')
            .then((response) => {
                // Change date to a string telling us how recent it was
                response.data.forEach(row => row.date = moment(row.date).fromNow())
                // set state to the array of row objects
                this.setState({
                    fromDB: [...response.data]
                })
            })
            .catch((error) => {
                console.log("Client error getting data from database", error);
            })
    }
    render() {
        return (
            <>
                <MaterialTable
                    title="Administrator View"
                    columns={[
                        { title: 'Feeling', field: 'feeling', type: 'numeric' },
                        { title: 'Understanding', field: 'understanding', type: 'numeric' },
                        { title: 'Support', field: 'support', type: 'numeric' },
                        { title: 'Comments', field: 'comments' },
                        { title: 'Flagged', field: 'flagged', type: 'boolean' },
                        { title: 'Added', field: 'date' }
                    ]}
                    data={this.state.fromDB}
                    actions={[
                        {
                            icon: 'check',
                            tooltip: 'Flag for later',
                            onClick: (event, rowData) => this.putFlag(rowData.id)
                        },
                        {
                            icon: 'delete',
                            tooltip: 'Delete Row',
                            onClick: (event, rowData) => this.handleClickOpen(rowData.id)
                        }
                    ]}
                    options={{
                        pageSize: 20,
                        exportButton: true
                    }}
                />
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                >
                    <DialogTitle id="alert-dialog-title">{"Delete Respnse?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            This will delete the comment from the database. There is no undo... so are you sure?
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Don't Do It
                    </Button>
                        <Button onClick={this.handleCloseYes} color="error" autoFocus>
                            Delete It
                    </Button>
                    </DialogActions>
                </Dialog>
            </>
        )
    }
}




const mapReduxStateToProps = (reduxState) => {
    return reduxState
}
export default connect(mapReduxStateToProps)(Admin);