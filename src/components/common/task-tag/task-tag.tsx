import styles from './task-tag.module.scss';
import { TaskSymbol } from '../task-symbol/task-symbol';
import { ReactNode } from 'react';

type TypeName = 'stage' | 'stage-comp' | 'tree' | 'selector';

export interface TaskTagProps {
    type: TypeName;
    chevron?: boolean;
    children: ReactNode;
}

export const TaskTag = ({ chevron = false, type, children }: TaskTagProps) => {
    return (
        <span className={styles[type]}>
            {chevron && <TaskSymbol name="chevron" />}
            {type === 'tree' && <TaskSymbol name="div" />}
            {children}
        </span>
    );
};
