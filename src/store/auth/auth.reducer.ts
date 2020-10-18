import { authActionTypes } from './auth.actionTypes';
import { AuthState, AuthActionTypes } from './auth.interface';

const initialState: AuthState = {
    isSubmitting: false,
    currentUser: null,
    error: null,
};

export function authReducer(state: AuthState = initialState, action: AuthActionTypes): AuthState {
    switch (action.type) {
        case authActionTypes.LOG_IN_REQUEST:
            return { ...state, isSubmitting: true, error: null };
        case authActionTypes.LOG_IN_SUCCESS:
            return { ...state, isSubmitting: false, currentUser: action.payload };
        case authActionTypes.LOG_IN_FAILURE:
            return { ...state, isSubmitting: false, error: action.payload };

        case authActionTypes.LOG_OUT_SUCCESS:
            return initialState;
        case authActionTypes.LOG_OUT_FAILURE:
            return { ...state, error: action.payload };

        default:
            return state;
    }
}
