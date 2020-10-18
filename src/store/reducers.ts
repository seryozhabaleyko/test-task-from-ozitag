import { combineReducers } from 'redux';

import { authReducer } from './auth/auth.reducer';
import { profileReducer } from '../pages/profile/profile.reducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    profile: profileReducer,
});
