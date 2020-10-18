import { fetchProfile, fetchProfileSuccess, fetchProfileFailure } from './profile.actions';

export interface User {
    name: string;
    email: string;
}

export interface ProfileState {
    loading: boolean;
    user: User | null;
    error: Error | null;
}

export type FetchProfile = ReturnType<typeof fetchProfile>;

export type ProfileActionTypes =
    | FetchProfile
    | ReturnType<typeof fetchProfileSuccess>
    | ReturnType<typeof fetchProfileFailure>;
