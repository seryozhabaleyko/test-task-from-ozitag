import {
    FETCH_PROFILE_REQUEST,
    FETCH_PROFILE_SUCCESS,
    FETCH_PROFILE_FAILURE,
} from './profile.actionTypes';
import { ProfileState, ProfileActionTypes } from './profile.interface';

const initialState: ProfileState = {
    loading: false,
    user: null,
    error: null,
};

export function profileReducer(
    state: ProfileState = initialState,
    action: ProfileActionTypes,
): ProfileState {
    switch (action.type) {
        case FETCH_PROFILE_REQUEST:
            return { ...state, loading: true, user: null, error: null };
        case FETCH_PROFILE_SUCCESS:
            return { ...state, loading: false, user: action.payload };
        case FETCH_PROFILE_FAILURE:
            return { ...state, loading: false, error: action.payload };

        default:
            return state;
    }
}
