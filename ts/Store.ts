import {combineReducers, createStore} from 'redux';
import {IState} from './IStore';
import {TaskReducer} from './reducers/TaskReducer';

const combineReducer = combineReducers<IState>({
    taskList: TaskReducer,
});

const store = createStore(combineReducer);
export default store;
