import { logIn, logInSuccess, logInFailure, logOutSuccess, logOutFailure } from './auth.actions';

export interface Credentials {
    email: string;
    password: string;
}

export interface Token {
    tokenType: string;
    expiresAt: string;
    accessToken: string;
    refreshToken: string;
    scopes: [];
}

export type LogIn = ReturnType<typeof logIn>;

export interface AuthState {
    isSubmitting: boolean;
    currentUser: object | null;
    error: Error | null;
}

export type AuthActionTypes =
    | LogIn
    | ReturnType<typeof logInSuccess>
    | ReturnType<typeof logInFailure>
    | ReturnType<typeof logOutSuccess>
    | ReturnType<typeof logOutFailure>;
