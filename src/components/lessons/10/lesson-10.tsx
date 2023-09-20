import { Task10 as Task } from '../../tasks/10/task-10';
import styles from './lesson-10.module.scss';

export const Lesson10 = () => {
    return (
        <div className={styles.root}>
            <Task />
            <div className={styles.playground}>
                <div className={styles.sparkles} />
            </div>
        </div>
    );
};
