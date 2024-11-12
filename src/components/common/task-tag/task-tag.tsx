import { PropsWithChildren } from 'react';
import styles from './task-tag.module.scss';
import { TaskSymbol } from '../task-symbol/task-symbol';

type TypeName = 'stage' | 'stage-comp' | 'tree' | 'selector';

export interface TaskTagProps {
    type: TypeName;
    chevron?: boolean;
}

export const TaskTag = ({ chevron = false, type, children }: TaskTagProps & PropsWithChildren) => {
    return (
        <span className={styles[type]}>
            {chevron && <TaskSymbol name="chevron" />}
            {type === 'tree' && <TaskSymbol name="div" />}
            {children}
        </span>
    );
};
