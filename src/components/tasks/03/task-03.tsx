import styles from './task-03.module.scss';
import { TaskSymbol } from '../../common/task-symbol/task-symbol';
import { TaskTag } from '../../common/task-tag/task-tag';
import EditModeSymbol from '../../../assets/edit-mode.svg?react';

export const Task03 = () => {
    return (
        <div className={styles.task}>
            <div className={styles.progress}>
                <b>03</b> / 10
            </div>
            <div className={styles.title}>Add Elements</div>
            <ol start={0} className={styles.desc}>
                <li>
                    The <b>Add Elements Panel</b> lets you add new HTML elements and components. You
                    can find it on the <b>Elements Panel</b>. Let’s add the missing pupil to fix
                    this bauhaus poster.
                </li>
                <li>
                    Make sure you are on <TaskSymbol name="editMode" /> <b>Edit Mode.</b>
                </li>
                <li>Click on the eye to the right to select it.</li>
                <li>
                    Now, click <TaskSymbol name="add" /> and open the Add Panel and find the
                    <TaskSymbol name="component" />
                    <b>Pupil</b> component.
                </li>
                <li>
                    Finally, drag it from the <b>Add Elements Panel</b> into{' '}
                    <TaskTag type="tree">div.eye.top</TaskTag>
                    on the <br />
                    <b>Elements Panel</b>. You can also drag it directly into the top eye, on the
                    stage.
                </li>
            </ol>
        </div>
    );
};
