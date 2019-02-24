import {Action} from 'redux';
import {v4 as UUID} from 'uuid';
import {ITask} from '../states/ITask';

export const SHOW_TASKS = UUID();

export interface IShowTaskAction extends Action {
    tasks: ITask[];
}

export const ADD_TASK = UUID();

export interface IAddTaskAction extends Action {
    deadline: Date;
    taskName: string;
}

export const TOGGLE_COMPLETE_TASK = UUID();

export interface IToggleCompleteAction extends Action {
    taskId: string;
}

export const DELETE_TASK = UUID();

export interface IDeleteAction extends Action {
    taskId: string;
}

export const TOGGLE_SHOW_SPINNER = UUID();

// tslint:disable-next-line:no-empty-interface
export interface IToggleShowSpinnerAction extends Action {
}
