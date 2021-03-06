import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

import ReactTable from "react-table-6";  
import "react-table-6/react-table.css" 

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdateEmployee extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/employees/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeleteEmployee extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do tou want to delete the employee ${this.props.id} permanently?`,
            )
        ) {
            api.deleteEmployeeById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class EmployeesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            employees: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllEmployees().then(employees => {
            this.setState({
                employees: employees.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { employees, isLoading } = this.state
        console.log('TCL: EmployeesList -> render -> employees', employees)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'First Name',
                accessor: 'fname',
                filterable: true,
            },
            {
                Header: 'Last Name',
                accessor: 'lname',
                filterable: true,
            },
            {
                Header: 'Department',
                accessor: 'department',
                filterable: true,
            },
            {
                Header: 'Role',
                accessor: 'role',
                filterable: true,
            },

            {
                Header: 'Year Joined',
                accessor: 'year_joined',
                filterable: true,
            },
            {
                Header: 'Cell',
                accessor: 'cell',
                filterable: true,
            },

            {
                Header: 'Email',
                accessor: 'email',
                filterable: true,
            },
            {
                Header: 'Status',
                accessor: 'status',
                filterable: true,
            },


            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteEmployee id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateEmployee id={props.original._id} />
                        </span>
                    )
                },
            },


        ]

        let showTable = true
        if (!employees.length) {
            showTable = false
        }

        return (
            <React.Fragment>
                 <div class="header">
            <h1>Sesame Street Employee Directory</h1>
            <p>All your employees, easily accessible.</p>
          </div>
            <Wrapper>
               
                {showTable && (
                    <ReactTable
                        data={employees}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
            </React.Fragment>
        )
    }
}

export default EmployeesList