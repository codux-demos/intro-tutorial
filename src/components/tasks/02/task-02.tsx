import styles from './task-02.module.scss';
import { TaskTag } from '../../common/task-tag/task-tag';
import { TaskSymbol } from '~/components/common/task-symbol/task-symbol';

export const Task02 = () => {
    return (
        <div className={styles.task}>
            <div className={styles.progress}>
                <b>02</b> / 10
            </div>
            <div className={styles.title}>Elements Panel</div>
            <ol start={0} className={styles.desc}>
                <li>
                    The <b>Elements Panel</b>, on the left, represents the component's structure. It
                    contains both HTML elements and components. <br />
                    To re-arrange the structure, you can select and drag the elements. Let&apos;s
                    see how to put these numbers in the correct order.
                </li>
                <li>
                    Make sure you are on <TaskSymbol name="editMode" /> <b>Edit Mode.</b>
                </li>
                <li>
                    {' '}
                    Select a number and take a look at the different elements on the Elements Panel
                    to understand the structure.
                </li>
                <li>
                    {' '}
                    Now, drag the <TaskTag type="tree">div.row</TaskTag> elements on the{' '}
                    <b>Elements Panel</b> as needed to re-arrange the numbers in the correct order.
                </li>
            </ol>
        </div>
    );
};

/*
<div className={styles.title}>Elements Panel</div>
        <ol start={0} className={styles.desc}>
          <li> The <b>Elements Panel</b>, on the left, represents the component's structure. It contains both HTML elements and components. <br/>To re-arrange the structure, you can drag elements on the panel. Let's see how to put the numbers in the correct order.</li>
          <li> To view the structure of this component, hover over <TaskSymbol name="component" /><b>Lesson02</b> and click <TaskSymbol name="edit" /> <br/> to edit it. </li>
          <li> Take a look at the different elements of the component to understand its structure.</li>
          <li> Now, drag the <TaskTag type="tree">div.row</TaskTag> elements on the <b>Elements Panel</b> as needed to re-arrange the numbers in the correct order.</li>
        </ol>
        */
