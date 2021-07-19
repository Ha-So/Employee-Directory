import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { Home, EmployeesList, EmployeesCreate,  EmployeesUpdate} from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
            <Route path="/Employees/Home" exact component={Home} />
            <Route path="/Employees/List" exact component={EmployeesList} />
            <Route path="/Employees/Create" exact component={EmployeesCreate} />
            <Route path="/Employees/Update/:id" exact component={EmployeesUpdate} />
            </Switch>
         
        </Router>
        
    )
}
export default App
