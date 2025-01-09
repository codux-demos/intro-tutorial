import styles from './task.module.scss';
import { TaskSymbol } from '../common/task-symbol/task-symbol';

export const Task01 = () => {
    return (
        <div className={styles.task}>
            <div className={styles.progress}>
                <b>01</b> / 10
            </div>
            <div className={styles.title}>Let's Start!</div>
            <ol start={0} className={styles.desc}>
                <li>
                    In this tutorial, you&apos;ll learn how to view and visually edit <b>React</b>{' '}
                    components using
                    <b>&nbsp;Codux</b>.
                </li>
                <li>
                    Make sure you are on 
                    <TaskSymbol name="preview" /> mode &nbsp;and hover over the shapes to erase
                    them. Can you see what’s behind?
                </li>
                <li>
                    To reload and bring back the shapes, just click
                    <br />
                    <TaskSymbol name="reload" /> <b>Reload Preview</b>.
                </li>
                <li>
                    When ready, open
                    <TaskSymbol name="pages" />
                    <b>Pages</b> Panel on the left sidebar, or click NEXT to find your next lesson.
                </li>
            </ol>
        </div>
    );
};
