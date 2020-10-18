import { call, put, takeLatest } from 'redux-saga/effects';
import { logInFailure, logInSuccess, logOutSuccess, logOutFailure } from './auth.actions';
import { LogIn } from './auth.interface';
import { authActionTypes } from './auth.actionTypes';
import { signIn, signOut } from '../../services/api';

function* logIn({ payload: { email, password } }: LogIn) {
    try {
        const user = yield call(signIn, { email, password });
        yield put(logInSuccess(user));
        localStorage.setItem('token', JSON.stringify(user));
    } catch (error) {
        yield put(logInFailure(error));
        localStorage.removeItem('token');
    }
}

function* logOut() {
    try {
        const response = yield call(signOut);
        yield put(logOutSuccess(response));
        localStorage.removeItem('token');
    } catch (error) {
        yield put(logOutFailure(error));
    }
}

export function* authSagas() {
    yield takeLatest(authActionTypes.LOG_IN_REQUEST, logIn);
    yield takeLatest(authActionTypes.LOG_OUT_REQUEST, logOut);
}
