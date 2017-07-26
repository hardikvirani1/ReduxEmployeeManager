import React, {Component} from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './components/LoginForm';
import EmployeeLists from './components/EmployeeLists';
import EmployeeCreate from './components/EmployeeCreate';

const RouterComponent = () => {
    return(
        <Router>
            <Scene key = "auth">
                <Scene key = "login" component = {LoginForm} title = "Login" />
                <Scene key = "employeeLists" component = {EmployeeLists} leftTitle="Back"  rightTitle="Add"
                       onRight={() => Actions.employeeCreate() } title = "Employees" />
                <Scene key = "employeeCreate" component = {EmployeeCreate} title = "Employee Create"  />
            </Scene>
        </Router>
    );
};

export default RouterComponent;


