import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class EmployeesCreate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fname: '',
            lname: '',
            department: '',
            role: '',
            year_joined: '',
            cell: '',
            email: '',
            status: '',
            state: '',
            photo: '',
        }
    }

    handleChangeInputFName = async event => {
        const fname = event.target.value
        this.setState({ fname })
    }
    handleChangeInputLName = async event => {
        const lname = event.target.value
        this.setState({ lname })
    }
    handleChangeInputDep = async event => {
        const department = event.target.value
        this.setState({ department })
    }
    handleChangeInputRole = async event => {
        const role = event.target.value
        this.setState({ role })
    }
    handleChangeInputYear = async event => {
        const year_joined = event.target.value
        this.setState({ year_joined })
    }
    handleChangeInputCell = async event => {
        const cell = event.target.value
        this.setState({ cell })
    }
    handleChangeInputEmail = async event => {
        const email = event.target.value
        this.setState({ email })
    }
    handleChangeInputStatus = async event => {
        const status = event.target.value
        this.setState({ status })
    }
    handleChangeInputState = async event => {
        const state = event.target.value
        this.setState({ state })
    }
    handleChangeInputPhoto = async event => {
        const photo = event.target.value
        this.setState({ photo })
    }

   
    handleIncludeEmployee = async () => {
        const { fname, lname, department, role, year_joined, cell, email, status, state, photo} = this.state
        const payload = { fname, lname, department, role, year_joined, cell, email, status, state, photo}

        await api.insertEmployee(payload).then(res => {
            window.alert(`Employee inserted successfully`)
            this.setState({
            fname: '',
            lname: '',
            department: '',
            role: '',
            year_joined: '',
            cell: '',
            email: '',
            status: '',
            state: '',
            photo: '',
            })
        })
    }

    render() {
        const { fname, lname, department, role, year_joined, cell, email, status, state, photo} = this.state
        return (
            <Wrapper>
                <Title>Create Employee</Title>

                <Label>First Name: </Label>
                <InputText
                    type="text"
                    value={fname}
                    onChange={this.handleChangeInputFName}
                />
                <Label>Last Name: </Label>
                <InputText
                    type="text"
                    value={lname}
                    onChange={this.handleChangeInputLName}
                />

                <Label>Department: </Label>
                <InputText
                    type="text"
                    value={department}
                    onChange={this.handleChangeInputDep}
                />
                <Label>Role: </Label>
                <InputText
                    type="text"
                    value={role}
                    onChange={this.handleChangeInputRole}
                />
                  <Label>Year Joined: </Label>
                <InputText
                    type="text"
                    value={year_joined}
                    onChange={this.handleChangeInputYear}
                />
                <Label>Cell #: </Label>
                <InputText
                    type="text"
                    value={cell}
                    onChange={this.handleChangeInputCell}
                />
                  <Label>Email Address: </Label>
                <InputText
                    type="text"
                    value={email}
                    onChange={this.handleChangeInputEmail}
                />
                  <Label>Status: </Label>
                <InputText
                    type="text"
                    value={status}
                    onChange={this.handleChangeInputStatus}
                />
                       <Label>State: </Label>
                <InputText
                    type="text"
                    value={state}
                    onChange={this.handleChangeInputState}
                />
                       <Label>Photo: </Label>
                <InputText
                    type="text"
                    value={photo}
                    onChange={this.handleChangeInputPhoto}
                />




              

                <Button onClick={this.handleIncludeEmployee}>Add Employee</Button>
                <CancelButton href={'/employees/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default EmployeesCreate