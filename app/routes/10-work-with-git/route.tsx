import Cloud from '../../../src/assets/cloud.svg?react';
import { Task10 as Task } from '~/components/tasks/task-10';
import styles from './lesson-10.module.scss';
import { LessonsFooter } from '~/components/lessons-footer/lessons-footer';
import { LESSON_09 } from '~/router/config';

export default function Lesson10() {
    return (
        <div className={styles.container}>
            <div className={styles.root}>
                <div className={styles.lesson}>
                    <Task />
                    <div className={styles.playground}>
                        <div className={styles.arcs} />
                        <Cloud className={styles.cloud} />
                    </div>
                </div>
            </div>
            <LessonsFooter previousUrl={LESSON_09} />
        </div>
    );
}
