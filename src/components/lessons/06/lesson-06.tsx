import { Task06 as Task } from '../../tasks/06/task-06';
import styles from './lesson-06.module.scss';

export const Lesson06 = () => {
    return (
        <div className={styles.root}>
            <Task />
            <div className={`${styles.playground} ${styles.bgColor}`} id="playground">
                <div className={styles.quote}>
                    “Creativity is <span>nothing but a mind set</span> free.”
                </div>
                <div className={styles.author}>Torrie T. Asai</div>
            </div>
        </div>
    );
};
