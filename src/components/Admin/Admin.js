import React, { Component } from 'react';
import { connect } from 'react-redux'
import MaterialTable from 'material-table'
import Axios from 'axios';

class Admin extends Component {
    state={
        fromDB : []
    }
        handleChangeFor=(event, el) => {
                this.setState({
                        [el]: event.target.value,
                });
        }
        componentDidMount(){
            // reset where you were (like page 0 and reset inputs)
            this.getData();
            console.log(this.state.fromDB);
            
        }

        putFlag = (id)=>{
            console.log(id);
            Axios.put(`/feedback/${id}`)
            .then(()=>{
                this.getData();
            })
            .catch((error)=>{
                console.log("ERROR flagging", error);
            })
        }
        deleteRow = (id)=>{
            console.log(id);
            Axios.delete(`/feedback/${id}`)
            .then(()=>{
                this.getData();
            })
            .catch((error)=>{
                console.log("ERROR deleting", error);
            })
        }
        getData = () =>{
            Axios.get('/feedback')
            .then((response)=>{
                console.log(response.data);
                this.setState({
                    fromDB : [...response.data]
                })
                console.log(this.state.fromDB);
            })
            .catch((error)=>{
                console.log("Client error getting data from database", error);
            })
        }
                render() {
                    return (
                      <MaterialTable
                        title="Administrator View"
                        columns={[
                          { title: 'Feeling', field: 'feeling', type: 'numeric' },
                          { title: 'Understanding', field: 'understanding', type: 'numeric' },
                          { title: 'Support', field: 'support', type: 'numeric' },
                          { title: 'Comments', field: 'comments' },
                          { title: 'Flagged', field: 'flagged', type: 'boolean' },
                           
                        ]}
                        data= {this.state.fromDB}    
                        actions={[
                          {
                            icon: 'check',
                            tooltip: 'Flag for later',
                            onClick: (event, rowData) => this.putFlag(rowData.id)
                          },
                          {
                            icon: 'delete',
                            tooltip: 'Delete Row',
                            onClick: (event, rowData) => this.deleteRow(rowData.id)
                          }
                        ]}
                        options={{
                            pageSize: 20,
                            exportButton: true
                          }}
                      />
                    
                    )
                  }
                }




const mapReduxStateToProps = (reduxState) => {
        return reduxState
}
export default connect(mapReduxStateToProps)(Admin);