import React, { Component } from 'react'
import api, { insertEmployee } from '../api'
import FileBase64 from 'react-file-base64';

import styled from 'styled-components'
import { Container, Row, Col } from 'reactstrap';
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
 
const actions = [
  { label: "Add", value: 1 },
  { label: "Edit", value: 2 },
  { label: "Delete", value: 3 }
];

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
    margin: 5px 5px 5px 5px;
    align-content: center;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
    align-content: center;
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
    handleChangeInputBase64(img){
        this.setState({ photo: String(img.base64) })
        console.log(img.base64)
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
            <React.Fragment>
            <div class="header">
       <h1>Sesame Street Employee Directory</h1>
       <p>All your employees, easily accessible.</p>
     </div>
            <Wrapper>
              
                <Title>Create Employee</Title>
                <Container>
                <Row>
                <Col xs="6">
                <InputText
                    type="text"
                    value={fname}
                    placeholder="First Name"
                    onChange={this.handleChangeInputFName}
                /></Col>
                <Col xs="6"> 
                <InputText
                    type="text"
                    value={lname}
                    placeholder="Last Name"
                    onChange={this.handleChangeInputLName}
                /></Col>
                </Row>
                <Row>
                <Col xs="6">
      
                <InputText
                    type="text"
                    value={department}
                    placeholder="Department"
                    onChange={this.handleChangeInputDep}
                />
                </Col>
                <Col xs="6"> 
               
                <InputText
                    type="text"
                    value={role}
                    placeholder="Role"
                    onChange={this.handleChangeInputRole}
                />
                </Col>
                </Row>
                <Row>
                <Col xs="6">
                 
              
                <InputText
                    type="text"
                    value={year_joined}
                    placeholder="Year Joined"
                    onChange={this.handleChangeInputYear}
                />
                </Col>
                <Col xs="6"> 
                <InputText
                    type="text"
                    value={cell}
                    placeholder="Cell #"
                    onChange={this.handleChangeInputCell}
                />
                </Col>
                </Row>
                

                <Row>
                <Col xs="6">
                 
              
 
                <InputText
                    type="text"
                    value={email}
                    placeholder="Email Address"
                    onChange={this.handleChangeInputEmail}
                />
                </Col>
                <Col xs="6"> 
               
                <InputText
                    type="text"
                    value={status}
                    placeholder="Employment Status"
                    onChange={this.handleChangeInputStatus}
                />
                </Col>
                </Row>

                <Row>
                <Col xs="6">
                 
            
                <InputText
                    type="text"
                    value={state}
                    placeholder="State"
                    onChange={this.handleChangeInputState}
                />
                </Col>
                <Col xs="6">
                    <Label>Employee Photo</Label>  <br></br>
                <FileBase64
                multiple={ false }
                onDone={ this.handleChangeInputBase64.bind(this)} />
                </Col>
                </Row>
             
                </Container>
              
                
                <Button onClick={this.handleIncludeEmployee}>Add Employee</Button>
                <CancelButton href={'/employees/list'}>Cancel</CancelButton>
                
            </Wrapper>
            </React.Fragment>
        )
    }
}

export default EmployeesCreate