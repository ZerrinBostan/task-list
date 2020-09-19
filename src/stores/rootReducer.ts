import { combineReducers } from 'redux';
import { github } from './task/reducer';

export const rootReducer = combineReducers({
   github,
});

export type RootState = ReturnType<typeof rootReducer>
