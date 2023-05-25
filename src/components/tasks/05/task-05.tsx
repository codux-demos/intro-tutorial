import styles from './task-05.module.scss';
import { TaskSymbol } from '../../common/task-symbol/task-symbol';
import { TaskTag } from '../../common/task-tag/task-tag';

export const Task05 = () => {
    return (
        <div className={styles.task}>
            <div className={styles.progress}>
                <b>05</b> / 10
            </div>
            <div className={styles.title}>Styles Panel</div>
            <ol start={0} className={styles.desc}>
                <li>
                    On the <b>Styles Panel</b>, you can apply <b>styles</b> to
                    one or more elements using
                    <b> selectors</b>. Let's use them to adjust spacing.
                </li>
                <li>
                    To bring the circles closer together, we need to adjust
                    their margins. Edit <br></br>
                    <TaskSymbol name="component" />
                    <b>Lesson05</b> and select any circle on the stage.
                </li>
                <li>
                    Now, open the
                    <TaskSymbol name="styles" />
                    <b>Styles Panel</b> on the right.
                </li>
                <li>
                    Scroll down to <b>Margin</b> and set it to <b>6px</b>.
                    Notice how all circles change margins as they share the same
                    selector.
                </li>
                <li>
                    Next, let's adjust the padding of the button below. Select
                    the button and then 
                    scroll to <b>Padding</b>. To fix it, set it to
                    <b> 15px</b>.
                </li>
            </ol>
        </div>
    );
};
