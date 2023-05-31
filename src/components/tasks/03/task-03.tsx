import styles from './task-03.module.scss';
import { TaskSymbol } from '../../common/task-symbol/task-symbol';
import { TaskTag } from '../../common/task-tag/task-tag';

export const Task03 = () => {
    return (
        <div className={styles.task}>
            <div className={styles.progress}>
                <b>03</b> / 10
            </div>
            <div className={styles.title}>Add Elements</div>
            <ol start={0} className={styles.desc}>
                <li>
                    The <b>Add Elements Panel</b> lets you add new HTML elements
                    and components. You can find it on the <b>Elements Panel</b>
                    . Let’s add the missing pupil to fix this bauhaus poster.
                </li>
                <li>
                    On the <b>Elements Panel</b>, hover over <br />{' '}
                    <TaskSymbol name="component" />
                    <b>Lesson03</b> and <TaskSymbol name="edit" /> edit it.
                </li>
                <li>
                    Now, click <TaskSymbol name="add"/>{' '}
                    <b>Add</b> and in the <b>Add Elements Panel</b> find the
                    <TaskSymbol name="component" />
                    <b>Pupil</b> component.
                </li>
                <li>
                    Finally, drag it from the <b>Add Elements Panel</b> into{' '}
                    <TaskTag type="tree">div.eye.top</TaskTag>
                    on the <br />
                    <b>Elements Panel</b>. You can also drag it directly into the top eye, on the stage.
                </li>
            </ol>
        </div>
    );
};
