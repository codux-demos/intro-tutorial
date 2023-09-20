import { Task01 as Task } from '../../tasks/01/task-01';
import styles from './lesson-01.module.scss';

export const Lesson01 = () => {
    return (
        <div className={styles.root}>
            <Task />
            <div className={styles.playground}></div>
        </div>
    );
};
