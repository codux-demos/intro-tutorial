import Cloud from '../../../src/assets/cloud.svg?react';
import { Task10 as Task } from '~/components/tasks/10/task-10';
import styles from './lesson-10.module.scss';

export default function Lesson10() {
    return (
        <div className={styles.root}>
            <Task />
            <div className={styles.playground}>
                <div className={styles.arcs} />
                <Cloud className={styles.cloud} />
            </div>
        </div>
    );
}
