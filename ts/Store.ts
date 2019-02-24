import {combineReducers, createStore} from 'redux';

import {TaskReducer} from './reducers/TaskReducer';
import {ITaskList} from './states/ITask';

export interface IState {
    taskList: ITaskList;
}

const combineReducer = combineReducers<IState>({
    taskList: TaskReducer,
});

const store = createStore(combineReducer);
export default store;
