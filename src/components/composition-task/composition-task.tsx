import classNames from 'classnames';
import styles from './composition-task.module.scss';

export interface CompositionTaskProps {
    className?: string;
}

export const CompositionTask: React.FC<CompositionTaskProps> = ({ className }) => {
    return (
        <div className={classNames(styles.task, className)}>
            <div className={styles.title}>What is a board?</div>
            <ol start={0} className={styles.desc}>
                <li>Those elements got messed up. Let’s learn how to put them in order.</li>
                <li>
                    1. Go to the <b>Elements Panel</b> on the left and edit component{' '}
                    <b>Lesson06</b>.
                </li>
                <li>
                    Find and expand <b>div.playground</b>
                </li>
                <li>
                    Drag <b>div.dragMe</b> so that 5 goes under 3 and 4
                </li>
                <br />
                Ahh, finally some order...
            </ol>
        </div>
    );
};
