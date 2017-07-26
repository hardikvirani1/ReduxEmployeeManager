import {Actions} from 'react-native-router-flux';
import {EMAIL_CHANGED, PASSWORD_CHANGED, LOGIN_USER_SUCCESS, LOGIN_USER_FAIL, LOGIN_USER } from './types';
import firebase from 'firebase';

export const emailChanged = (text) => {
    return {
        type: EMAIL_CHANGED,
        emailValue: text,
    };
};

export const passwordChanged = (text) => {
    return {
        type: PASSWORD_CHANGED,
        passwordValue: text,
    };
};

export const loginUser = ({email, password}) => {
    return dispatch => {
        dispatch({ type: LOGIN_USER});

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => loginUserSuccess(dispatch, user))
            .catch (() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(user => loginUserSuccess(dispatch, user))
                    .catch((error) => loginUserFail(dispatch, error))
            })
    }
};

const loginUserFail = (dispatch, error) => {
    dispatch ({
        type: LOGIN_USER_FAIL,
        errorValue: error.message
    })
};

const loginUserSuccess = (dispatch, user) => {
    dispatch ({
        type: LOGIN_USER_SUCCESS,
        userValue: user
    });
    Actions.employeeLists();
};
