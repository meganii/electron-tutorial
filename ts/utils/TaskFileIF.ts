import FsEx from 'fs-extra';
import OS from 'os';
import Path from 'path';

import { ITask } from '../states/ITask';

const dataFilePath = Path.join(OS.homedir(), 'todo.json');

export const loadTask = async () => {
    const exist = await FsEx.pathExists(dataFilePath);
    if (!exist) {
        FsEx.ensureFileSync(dataFilePath);
        return FsEx.writeJSON(dataFilePath, {data: []});
    }
    const jsonData = await FsEx.readJSON(dataFilePath, {
        reviver: (key: string, value: any) => {
            if (key === 'deadline') {
                return new Date(value as number);
            } else {
                return value;
            }
        },
    });
    return jsonData;
};

export const saveState = async (taskList: ITask[]) => {
    await FsEx.writeJSON(dataFilePath, { data: taskList }, {
        replacer: (key: string, value: any) => {
            if (key !== 'deadline') { return value; }
            return new Date((value as string)).getTime();
        },
        spaces: 2,
    });
};
