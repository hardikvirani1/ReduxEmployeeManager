import React, {Component} from 'react';
import {AppRegistry, View, Text, TextInput, TouchableHighlight, ActivityIndicator } from 'react-native';
import firebase from 'firebase';
import {connect} from 'react-redux';
import {emailChanged, passwordChanged, loginUser } from '../actions';

class LoginForm extends Component {

    constructor(props){
        super(props);
    }

    onEmailChange = (text) => {
        this.props.emailChanged(text);
    };

    onPasswordChange = (text) => {
        this.props.passwordChanged(text);
    };

    onLoginSet = () => {
        const {email, password} = this.props;
        this.props.loginUser({email, password});
    };

    setLoading(){
        if(this.props.loading){
            return (
                <ActivityIndicator color='#007AFF' size='large'/>
            );
        }
        else {
            return(
                <View style={{backgroundColor: '#007AFF', borderColor: 'white', borderWidth: 1, borderRadius: 6, padding: 6,
                    margin: 5}}>
                    <TouchableHighlight onPress={this.onLoginSet} style={{}}>
                        <Text style={{fontSize: 15, color: 'white', alignSelf: 'center'}}>Log in!</Text>
                    </TouchableHighlight>
                </View>
            );
        }
    };

    render() {
        return (
            <View style={{flexDirection: 'column',}}>
                <View>
                    <View style={{flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 10}}>
                        <View style={{flex: 3, justifyContent: 'center', alignSelf: 'center'}}>
                            <Text style={{fontSize: 14,}}>Email : </Text>
                        </View>

                        <View style={{flex: 7, borderBottomWidth: 1, borderBottomColor: '#007AFF', justifyContent: 'center',
                            alignSelf: 'center'}}>
                            <TextInput style={{padding: 5, width: 200, height: 30}} placeholder="user@gmail.com"
                                       autoCorrect={false} value={this.props.email} onChangeText={this.onEmailChange}/>
                        </View>
                    </View>


                    <View style={{flexDirection: 'row', paddingVertical: 1, paddingHorizontal: 10}}>
                        <View style={{flex: 3, justifyContent: 'center', alignSelf: 'center'}}>
                            <Text style={{fontSize: 14,}}>Password : </Text>
                        </View>

                        <View style={{flex: 7, borderBottomWidth: 1, borderBottomColor: '#007AFF', justifyContent: 'center',
                            alignSelf: 'center'}}>
                            <TextInput style={{padding: 5, width: 200, height: 30}} placeholder="********"
                                       secureTextEntry={true}
                                       value={this.props.password} onChangeText={this.onPasswordChange}/>
                        </View>
                    </View>


                    <View style={{justifyContent: 'center', paddingHorizontal: 6,}}>
                        <View style={{margin: 1}}>
                            <Text style={{fontSize: 14, color: 'red', alignSelf: 'center'}}>{this.props.error}</Text>
                        </View>
                    </View>
                </View>

                    {this.setLoading()}

                    </View>
        );
    };
}

mapStateToProps = state => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error,
        loading: state.auth.loading
    }
};

export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);