import classNames from 'classnames';
import styles from './composition-task.module.scss';

export interface CompositionTaskProps {
    className?: string;
}

export const CompositionTask: React.FC<CompositionTaskProps> = ({ className }) => {
    return (
        <div className={classNames(styles.task, className)}>
            <div className={styles.title}>What are boards?</div>
            <ol start={0} className={styles.desc}>
                <li>
                    Boards are a great way to <b>test and edit your components in isolation.</b> It
                    allows easy access to components and other elements outside your actual site,
                    where you can:
                </li>
                <li>Test and edit components variations, edge cases and various screen sizes</li>
                <li>Mock different permutations and states using properties</li>
                <li>Create variants to easily reuse across your site</li>
            </ol>
            <br />
            <a
                href="https://help.codux.com/kb/en/article/what-are-boards"
                target="blank"
                className={styles.link}
            >
                Learn more about Boards
            </a>
        </div>
    );
};
