import Moment from 'moment';
import {ITask} from '../states/ITask';
import {
    ADD_TASK,
    DELETE_TASK,
    IAddTaskAction,
    IDeleteAction,
    IShowTaskAction,
    IToggleCompleteAction,
    SHOW_TASKS,
    TOGGLE_COMPLETE_TASK,
} from './TaskActions';

export const createShowTaskAction = (tasks: ITask[]): IShowTaskAction => {
    const dummyTasks: ITask[] = [
        {
            complete: false,
            deadline: Moment().add(1, 'day').toDate(),
            id: '0',
            taskName: 'task01',
        },
        {
            complete: true,
            deadline: Moment().add(1, 'day').toDate(),
            id: '1',
            taskName: 'task02',
        },
        {
            complete: false,
            deadline: Moment().add(-1, 'day').toDate(),
            id: '2',
            taskName: 'task03',
        },
        {
            complete: true,
            deadline: Moment().add(-1, 'day').toDate(),
            id: '3',
            taskName: 'task04',
        },
    ];
    return {
        tasks: dummyTasks,
        type: SHOW_TASKS,
    };
};

export const createAddTaskAction = (taskName: string, deadline: Date): IAddTaskAction => {
    return {
        deadline,
        taskName,
        type: ADD_TASK,
    };
};

export const createToggleCompleteAction = (taskId: string): IToggleCompleteAction => {
    return {
        taskId,
        type: TOGGLE_COMPLETE_TASK,
    };
};

export const createDeleteTaskAction = (taskId: string): IDeleteAction => {
    return {
        taskId,
        type: DELETE_TASK,
    };
};
