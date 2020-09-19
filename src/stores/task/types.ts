export const GET_USER = 'GET_USER';
export const GET_REPOS = 'GET_REPOS';

export const SET_REPOS = 'SET_REPOS';
export const SET_USER = 'SET_USER';

export const SET_LOADING = 'SET_LOADING';

export interface State {
  repositories: ReposState[] | null,
  user: UserState | null,
  loading: LoadingState | null,
}


export interface LoadingState {
  id: string,
}

export interface ReposState {
  id: number,
  name: string,
  description: string,
  full_name: string,
  languages_url: string,
  license: object | null,
  forks: number,
  stargazers_count: number,
  open_issues_count: number,
  forks_count: number,
}

export interface UserState {
  id: number,
  name: string,
  bio: string,
  location: string,
  blog: string,
  email: string,
  avatar_url: string,
 
  public_repos: number,
}

interface SetReposAction {
  type: typeof SET_REPOS,
  payload: ReposState[],
};

interface SetUserAction{
  type: typeof SET_USER,
  payload: UserState,
}

interface GetUserAction {
  type: typeof GET_USER
}

interface SetLoadingAction {
  type: typeof SET_LOADING,
  payload: LoadingState
}

export type SetReposActionTypes = SetReposAction;
export type SetUserActionTypes = SetUserAction;

export type GetUserActionType = GetUserAction;

export type SetLoadingActionType = SetLoadingAction;