import {combineReducers, createStore} from 'redux';
import {UserReducer} from './reducers/UserReducer';
import IUser from './states/IUser';

export interface IState {
    User: IUser;
}

const combineReducer = combineReducers<IState>({
    User: UserReducer,
});

export const store = createStore(combineReducer);

export default store;
