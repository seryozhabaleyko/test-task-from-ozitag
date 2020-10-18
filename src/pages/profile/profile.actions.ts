import {
    FETCH_PROFILE_REQUEST,
    FETCH_PROFILE_SUCCESS,
    FETCH_PROFILE_FAILURE,
} from './profile.actionTypes';
import { User } from './profile.interface';

export function fetchProfile() {
    return {
        type: FETCH_PROFILE_REQUEST,
    } as const;
}

export function fetchProfileSuccess(user: User | null) {
    return {
        type: FETCH_PROFILE_SUCCESS,
        payload: user,
    } as const;
}

export function fetchProfileFailure(error: Error | null) {
    return {
        type: FETCH_PROFILE_FAILURE,
        payload: error,
    } as const;
}
