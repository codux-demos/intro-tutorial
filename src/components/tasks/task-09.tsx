import styles from './task.module.scss';
import { TaskSymbol } from '../common/task-symbol/task-symbol';
import { TaskTag } from '../common/task-tag/task-tag';

export const Task09 = () => {
    return (
        <div className={styles.task}>
            <div className={styles.progress}>
                <b>09</b> / 10
            </div>
            <div className={styles.title}>Grid Layout</div>
            <ol start={0} className={styles.desc}>
                <li>
                    <b>Grid Layout</b> lets you manage your layout using rows and columns. It
                    defines how elements relate to each other. Let’s turn this tile puzzle into a
                    heart using the grid layout.
                </li>
                <li>
                    Make sure you are on <TaskSymbol name="editMode" /> mode.
                </li>
                <li>
                    Open the Elements Panel and select
                    <br />
                    <TaskTag type="tree">div.grid</TaskTag>
                </li>
                <li>
                    Open the
                    <TaskSymbol name="styles" />
                    <b> Styles Panel</b> and then add a column (1fr).
                </li>
                <li>Now, find the white box on the stage and select it.</li>
                <li>
                    To move the white box to be in the right place, scroll to
                    <b> Grid Child</b> and make the<b> rows</b> and <b>columns</b> start at <b>4</b>{' '}
                    and end at
                    <b> 5</b>.
                </li>
            </ol>
        </div>
    );
};
