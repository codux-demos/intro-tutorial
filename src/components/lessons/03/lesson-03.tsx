import { Task03 as Task } from '../../tasks/03/task-03';
import { Pupil } from '../pupil/pupil';
import styles from './lesson-03.module.scss';

export const Lesson03 = () => {
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
