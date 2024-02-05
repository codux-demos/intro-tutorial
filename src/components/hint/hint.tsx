import classNames from 'classnames';
import styles from './hint.module.scss';

export interface HintProps {
    className?: string;
    text: string;
    svg: string;
    textClassName?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Hint = ({ className, svg, text, textClassName }: HintProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.container}>
                <p className={classNames(textClassName)}>
                    {text}
                </p>
                <img src={svg} className={styles.image} />
            </div>
        </div>
    );
};
