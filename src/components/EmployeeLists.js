import React, {Component} from 'react';
import {View, Text, ListView, } from 'react-native';
import {connect, } from 'react-redux';
import { EmployeeFetch,  } from '../actions';
import _ from 'lodash';

class EmployeeLists extends Component {
    constructor(props){
        super(props);

    }

    componentWillMount(){
        console.log('mount',this.props)
        this.props.EmployeeFetch();
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps){
        console.log('nextProps',this.props,nextProps)
        this.createDataSource(this.nextProps);
    }

    createDataSource({ employees }) {
        const ds = new ListView.dataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(employees);
    }

    render() {
        return (
            <View style={{padding:5}}>
                <Text>Employee Data here,</Text>
            </View>
        );
    }
}

mapStateToProps = state => {
    const employees = _.map(state.employees, (val, uid) => {
        return { ...val, uid };
    });
    return { employees };
};

export default connect(mapStateToProps, { EmployeeFetch, })(EmployeeLists);