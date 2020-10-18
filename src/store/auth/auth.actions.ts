import { authActionTypes } from './auth.actionTypes';
import { Credentials, Token } from './auth.interface';

export function logIn(credentials: Credentials) {
    return {
        type: authActionTypes.LOG_IN_REQUEST,
        payload: credentials,
    } as const;
}

export function logInSuccess(user: Token) {
    return {
        type: authActionTypes.LOG_IN_SUCCESS,
        payload: user,
    } as const;
}

export function logInFailure(error: any) {
    return {
        type: authActionTypes.LOG_IN_FAILURE,
        payload: error,
    } as const;
}

export function logOut() {
    return {
        type: authActionTypes.LOG_OUT_REQUEST,
    } as const;
}

export function logOutSuccess(data: { success: boolean }) {
    return {
        type: authActionTypes.LOG_OUT_SUCCESS,
        payload: data,
    } as const;
}

export function logOutFailure(error: Error | null) {
    return {
        type: authActionTypes.LOG_OUT_FAILURE,
        payload: error,
    } as const;
}
