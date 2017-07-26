import {EMPLOYEE_UPDATE, EMPLOYEE_CREATE, EMPLOYEE_FETCH_SUCCESS } from './types';
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

export const EmployeeUpdate = ({ prop, value }) => {
    return {
        type: EMPLOYEE_UPDATE,
        payload: { prop, value }
    }
};

export const EmployeeCreates = ({ name, phone, shift }) => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/employees`)
            .push({ name, phone, shift })
            .then(() => {
                dispatch({ type: EMPLOYEE_CREATE });
                Actions.employeeLists({type: 'reset'})
            });
    };
};

export const EmployeeFetch = () => {
    const { currentUser } = firebase.auth();

    return (dispatch) => {
        firebase.database().ref(`users/${currentUser.uid}/employees`)
            .on('value', snapshot => {
                dispatch({
                    type: EMPLOYEE_FETCH_SUCCESS,
                    payload: snapshot.val()
                })
            })
    }
};