import styles from './task.module.scss';
import { TaskSymbol } from '../common/task-symbol/task-symbol';
import { TaskTag } from '../common/task-tag/task-tag';

export const Task06 = () => {
    return (
        <div className={styles.task}>
            <div className={styles.progress}>
                <b>06</b> / 10
            </div>
            <div className={styles.title}>Create Class</div>
            <ol start={0} className={styles.desc}>
                <li>
                    <b>Classes</b> let you apply a set of styles to one or more elements. Let's
                    change the background color by creating a class.
                </li>
                <li>
                    Make sure you are on <TaskSymbol name="editMode" /> mode.
                </li>
                <li>
                    select
                    <TaskTag type="tree">div.playground</TaskTag>on the <b>Elements Panel</b>.
                </li>
                <li>
                    To apply new style, open the
                    <br />
                    <TaskSymbol name="styles" />
                    <b> Styles Panel</b> and click on{' '}
                    <span style={{ fontSize: '13px', color: '#0000EE' }}>+ Add</span>
                    <br /> next to classes, to add a new class.
                </li>
                <li>
                    Start typing the name of the new class. After naming it, click <b>ENTER</b> to
                    add it. <br />
                    The new class was added to <br />
                    <b>lesson-06.module.scss</b> style file.
                </li>
                <li>
                    Scroll to <b>Backgrounds</b> and set the background to <b>$charcoal-black</b>.
                </li>
            </ol>
        </div>
    );
};
