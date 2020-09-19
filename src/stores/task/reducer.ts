import {
  SetReposActionTypes,
  SET_REPOS,
  State,
  SET_USER,
  SetUserActionTypes,
  SET_LOADING,
  SetLoadingActionType,
} from './types';

const initialState: State = {
  repositories: null,
  user: null,
  loading: null,
};

export const github = (
  state = initialState,
  action: SetReposActionTypes | SetUserActionTypes | SetLoadingActionType
): State => {
  switch (action.type) {
    case SET_REPOS:
      return {
        ...state,
        repositories: action.payload,
      };
    case SET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};
