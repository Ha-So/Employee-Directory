import React, { Component } from 'react'
//import ReactTable from 'react-table'
import api from '../api'
import '../style/style.css'

import styled from 'styled-components'

import ReactTable from "react-table-6";  
import "react-table-6/react-table.css" 

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`
//<img src={url} />
const UnsplashImage = ({ar, url, key }) => (
    <div className="image-item" key={key} >
        
        {ar.map(image => (
          <img src={image} />
        ))}



      
    </div>
  );

class Gallery extends Component {
    constructor(props) {
   
        super(props)
        this.state = {
            employees: [],
            columns: [],
            isLoading: false,
            img_strings: []
            
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
        
        var arrayLength = employees.length;
        var imgstr = [];
     
        for (var i = 0; i < arrayLength; i++) {
            if(employees[i]['photo'].startsWith("data"))
            {
                
                imgstr.push(employees[i]['photo'])
               
            }
            //console.log(imgstr);
        }
        
     
        return (
            <React.Fragment>
                 <div class="header">
            <h1>Sesame Street Employee Directory</h1>
            <p>All your employees, easily accessible.</p>
          </div>
          <div class="sub-header">
            <p>Work in progress.</p>
          </div>
            <Wrapper>
            
            <div className="image-grid" style={{ marginTop: "30px"}}>
                <UnsplashImage ar={imgstr} />
                
         
    </div>
            
            </Wrapper>
            </React.Fragment>
        )
    }
}

export default Gallery