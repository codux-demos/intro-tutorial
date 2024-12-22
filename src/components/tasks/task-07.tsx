import styles from './task.module.scss';
import { TaskSymbol } from '../common/task-symbol/task-symbol';

export const Task07 = () => {
    return (
        <div className={styles.task}>
            <div className={styles.progress}>
                <b>07</b> / 10
            </div>
            <div className={styles.title}>Components</div>
            <ol start={0} className={styles.desc}>
                <li>
                    <b>Components</b> are reusable elements that can have various <b>properties</b>.
                    Let's make a path between the 2 hearts using <b>component properties</b>.
                </li>
                <li>
                    Make sure you are on <TaskSymbol name="editMode" /> mode.
                </li>
                <li>Select one of the circles on the right.</li>
                <li>
                    Open the <TaskSymbol name="props" />
                    <b> Properties Panel</b> on the right. Change the <b>iconDirection</b> property
                    and see what happens.
                </li>
                <li>
                    Can you make a path connecting the 2 hearts by using
                    <b>
                        <i> all </i>
                    </b>
                    of the box components with an arrow?
                </li>
            </ol>
        </div>
    );
};
