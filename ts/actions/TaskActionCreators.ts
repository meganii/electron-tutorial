import Moment from 'moment';
import { Dispatch, Store } from 'redux';

import {IState} from '../IStore';
import {ITask} from '../states/ITask';
import { loadTask, saveState } from '../utils/TaskFileIF';
import {
    ADD_TASK,
    DELETE_TASK,
    IAddTaskAction,
    IDeleteAction,
    IShowTaskAction,
    IToggleCompleteAction,
    IToggleShowSpinnerAction,
    SHOW_TASKS,
    TOGGLE_COMPLETE_TASK,
    TOGGLE_SHOW_SPINNER,
} from './TaskActions';

export const createShowTasksAction = (tasks: ITask[]): IShowTaskAction => {
    return {
        tasks,
        type: SHOW_TASKS,
    };
};

export const createAddTaskAction =
    (taskName: string, deadline: Date, store: Store<IState>): IToggleShowSpinnerAction => {
        (async () => {
            const addAction: IAddTaskAction = {
                deadline,
                taskName,
                type: ADD_TASK,
            };
            store.dispatch(addAction);
            const taskList = store.getState().taskList;
            await saveState(taskList.tasks);
            store.dispatch<IToggleShowSpinnerAction>({
                type: TOGGLE_SHOW_SPINNER,
            });
        })();
        return {
            type: TOGGLE_SHOW_SPINNER,
        };
    };

export const createToggleCompleteAction =
    (taskId: string, store: Store<IState>): IToggleShowSpinnerAction => {
        (async () => {
            store.dispatch<IToggleCompleteAction>({
                taskId,
                type: TOGGLE_COMPLETE_TASK,
            });
            const taskList = store.getState().taskList;
            await saveState(taskList.tasks);
            store.dispatch<IToggleShowSpinnerAction>({
                type: TOGGLE_SHOW_SPINNER,
            });
        })();
        return {
            type: TOGGLE_SHOW_SPINNER,
        };
    };

export const createDeleteTaskAction = (taskId: string, store: Store<IState>): IToggleShowSpinnerAction => {
    (async () => {
        store.dispatch<IDeleteAction>({taskId, type: DELETE_TASK});
        const taskList = store.getState().taskList;
        await saveState(taskList.tasks);
        store.dispatch<IToggleShowSpinnerAction>({
            type: TOGGLE_SHOW_SPINNER,
        });
    })();
    return {
        type: TOGGLE_SHOW_SPINNER,
    };
};

export const createLoadTasksAction = (dispatch: Dispatch): IToggleShowSpinnerAction => {
    let tasks: ITask[] = [];
    loadTask().then((jsonData) => {
        tasks = jsonData.data as ITask[];
        dispatch(createShowTasksAction(tasks));
        dispatch<IToggleShowSpinnerAction>({
            type: TOGGLE_SHOW_SPINNER,
        });
    });
    return {
        type: TOGGLE_SHOW_SPINNER,
    };
};
