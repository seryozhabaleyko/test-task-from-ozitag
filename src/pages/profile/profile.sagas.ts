import { FETCH_PROFILE_REQUEST } from './profile.actionTypes';
import { all, put, call, takeLatest } from 'redux-saga/effects';
import { fetchProfileFailure, fetchProfileSuccess } from './profile.actions';
import { getUserProfile } from '../../services/api';

function* fetchProfile() {
    try {
        const user = yield getUserProfile();
        yield put(fetchProfileSuccess(user));
    } catch (error) {
        yield put(fetchProfileFailure(error));
    }
}

export function* onProfileStart() {
    yield takeLatest(FETCH_PROFILE_REQUEST, fetchProfile);
}

export function* profileSagas() {
    yield all([call(onProfileStart)]);
}
