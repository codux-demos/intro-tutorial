import styles from './task.module.scss';
import { TaskSymbol } from '../common/task-symbol/task-symbol';
import { TaskTag } from '../common/task-tag/task-tag';

export const Task08 = () => {
    return (
        <div className={styles.task}>
            <div className={styles.progress}>
                <b>08</b> / 10
            </div>
            <div className={styles.title}>Flex Layout</div>
            <ol start={0} className={styles.desc}>
                <li>
                    With <b>Flex Layout</b>, you can align and stack elements inside another
                    element. Let’s see how you can move the circles into their holes using flex
                    properties.
                </li>
                <li>
                    Make sure you are on <TaskSymbol name="editMode" /> mode.
                </li>
                <li>
                    Select
                    <TaskTag type="tree">div.section.circles</TaskTag>on the <br />
                    <b> Elements Panel</b>.
                </li>
                <li>
                    Open the <TaskSymbol name="styles" />
                    <b>Styles Panel</b>. Take a look at the different flex properties under{' '}
                    <b>Layout</b>.
                </li>
                <li>
                    To put the circles into their holes, change the <b>Flex Direction</b> and{' '}
                    <b>Justify</b> properties.
                </li>
            </ol>
        </div>
    );
};
