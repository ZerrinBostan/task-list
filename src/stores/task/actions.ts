import {
  ReposState,
  SetReposActionTypes,
  SET_USER,
  SetUserActionTypes,
  UserState,
  SET_REPOS,
  GET_USER,
  GetUserActionType,
  SetLoadingActionType,
  LoadingState,
  SET_LOADING,
} from './types';

export const setRepos = (repos: Array<ReposState>): SetReposActionTypes => ({
  type: SET_REPOS,
  payload: repos,
});

export const setUser = (user: UserState): SetUserActionTypes => ({
  type: SET_USER,
  payload: user,
});

export const getUser = (): GetUserActionType => ({
  type: GET_USER,
});

export const setLoading = (payload: LoadingState): SetLoadingActionType => ({
  type: SET_LOADING,
  payload,
});
