import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {View, Text, } from 'react-native';
import ReduxThunk from 'redux-thunk';
import reducers from '../src/reducers';
import firebase from 'firebase';
import Header from './components/Header';
import Router from './Router';
import { composeWithDevTools } from 'redux-devtools-extension';

export default class App extends Component {

    componentWillMount(){
        const config = {
            apiKey: "AIzaSyAQdwnpMDzRma0As2nHmcg4XcL7BiwMrck",
            authDomain: "manager-436b1.firebaseapp.com",
            databaseURL: "https://manager-436b1.firebaseio.com",
            projectId: "manager-436b1",
            storageBucket: "manager-436b1.appspot.com",
            messagingSenderId: "688622918948"
        };
        firebase.initializeApp(config);
    }

    render() {
        return(
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))} >
            {/*<Provider store={createStore(reducers, {}, composeWithDevTools(applyMiddleware(ReduxThunk)))} >*/}
                <Router />
            </Provider>
        );
    }
}
