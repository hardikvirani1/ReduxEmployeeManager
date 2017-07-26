import React, {Component} from 'react';
import {View, Text, TextInput, TouchableHighlight, Picker} from 'react-native';
import {connect, } from 'react-redux';
import { EmployeeUpdate, EmployeeCreates } from '../actions';

class EmployeeCreate extends Component {
    constructor(props){
        super(props);
    }

    onNameChange = (text) => {
        this.props.EmployeeUpdate({ prop: 'name', value: text});
    };

    onPhoneChange = (text) => {
        this.props.EmployeeUpdate({ prop: 'phone', value: text});
    };

    onCreateSet = () => {
        const {name, phone, shift} = this.props;
        this.props.EmployeeCreates({name, phone, shift: shift || 'Monday' });
    };

    render () {
        return(
            <View style={{flexDirection: 'column',}}>
                <View>
                    <View style={{flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 10}}>
                        <View style={{flex: 2, justifyContent: 'center', alignSelf: 'center'}}>
                            <Text style={{fontSize: 14,}}>Name : </Text>
                        </View>

                        <View style={{flex: 8, borderBottomWidth: 1, borderBottomColor: '#007AFF', justifyContent: 'center',
                            alignSelf: 'center'}}>
                            <TextInput style={{padding: 5, width: 230, height: 30}} placeholder="Employee name"
                                       autoCorrect={false} value={this.props.name} onChangeText={this.onNameChange}/>
                        </View>
                    </View>


                    <View style={{flexDirection: 'row', paddingVertical: 1, paddingHorizontal: 10}}>
                        <View style={{flex: 2, justifyContent: 'center', alignSelf: 'center'}}>
                            <Text style={{fontSize: 14,}}>Phone : </Text>
                        </View>

                        <View style={{flex: 8, borderBottomWidth: 1, borderBottomColor: '#007AFF', justifyContent: 'center',
                            alignSelf: 'center'}}>
                            <TextInput style={{padding: 5, width: 230, height: 30}} placeholder="000-000-000"
                                       value={this.props.phone} onChangeText={this.onPhoneChange}/>
                        </View>
                    </View>


                    <View style={{flexDirection: 'row', paddingVertical: 1, paddingHorizontal: 10}}>
                        <View style={{flex: 2, justifyContent: 'center', alignSelf: 'center'}}>
                            <Text style={{fontSize: 14,}}>Shift : </Text>
                        </View>

                        <View style={{flex: 8,  justifyContent: 'center', alignSelf: 'center'}}>
                            <Picker selectedValue = {this.props.shift}
                                    onValueChange = {text => this.props.EmployeeUpdate({ prop: 'shift', value: text})}
                                    style={{height:100}}>
                                <Picker.Item label = "Monday" value = "Monday" />
                                <Picker.Item label = "Tuesday" value = "Tuesday" />
                                <Picker.Item label = "Wednesday" value = "Wednesday" />
                                <Picker.Item label = "Thursday" value = "Thursday" />
                                <Picker.Item label = "Friday" value = "Friday" />
                                <Picker.Item label = "Saturday" value = "Saturday" />
                                <Picker.Item label = "Sunday" value = "Sunday" />
                            </Picker>
                        </View>
                    </View>

                </View>


                <View style={{backgroundColor: '#007AFF', borderColor: 'white', borderWidth: 1, borderRadius: 6, padding: 6,
                    marginTop: 105}}>
                    <TouchableHighlight onPress={this.onCreateSet} style={{}}>
                        <Text style={{fontSize: 15, color: 'white', alignSelf: 'center'}}>Create</Text>
                    </TouchableHighlight>
                </View>

            </View>
        );
    }
}

mapStateToProps = state => {
    return {
        name: state.EmpForm.name,
        phone: state.EmpForm.phone,
        shift: state.EmpForm.shift
    }
};

export default connect(mapStateToProps, {EmployeeUpdate, EmployeeCreates })(EmployeeCreate);