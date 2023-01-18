import type React from 'react';
import styles from './lesson-03.module.scss';
import { Pupil } from '../pupil/pupil';
import { Task03 as Task } from '../../tasks/03/task-03';

export const Lesson03: React.FC = () => {
    return (
        <div className={styles.root}>
            <Task />
            <div className={styles.playground}>
                <div id="top" className={`${styles.eye} ${styles.top}`}>
                    <Pupil />
                </div>
                <div id="bottom" className={`${styles.eye} ${styles.bottom}`}>
                    <Pupil color={'hotRed'} />
                </div>
            </div>
        </div>
    );
};
