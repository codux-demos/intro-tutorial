import type React from 'react';
import styles from './lesson-01.module.scss';
import { Task01 as Task } from '../../tasks/01/task-01';

export const Lesson01: React.FC = () => {
    return (
        <div className={styles.root}>
            <Task />
            <div className={styles.playground}></div>
        </div>
    );
};
