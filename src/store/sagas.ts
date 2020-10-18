import { all, fork } from 'redux-saga/effects';

import { authSagas } from './auth/auth.sagas';
import { profileSagas } from '../pages/profile/profile.sagas';

export function* rootSaga(): Generator {
    yield all([fork(authSagas), fork(profileSagas)]);
}
