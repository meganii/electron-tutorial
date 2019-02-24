import {v4 as UUID} from 'uuid';

export interface ITask {
    complete: boolean;
    deadline: Date;
    id: string;
    taskName: string;
}

export interface ITaskList {
    tasks: ITask[];
}

export const initTaskList: ITaskList = {
    tasks: [],
};

export const createTask = (taskName: string, deadline: Date): ITask => {
    return {
        complete: false,
        deadline,
        id: UUID(),
        taskName,
    };
};
