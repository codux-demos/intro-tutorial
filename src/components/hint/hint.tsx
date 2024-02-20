import classNames from 'classnames';
import styles from './hint.module.scss';

export interface HintProps {
    className?: string;
    text: string;
    svg: string;
    textClassName?: string;
}

export const Hint = ({ className, svg, text, textClassName }: HintProps) => {
    return (
        <div className={classNames(styles.root, className)}>
                <p className={classNames(textClassName, styles.hintText)}>{text}</p>
                <img src={svg} className={styles.image} />
        </div>
    );
};
