import classNames from 'classnames';
import styles from './hint.module.scss';

export interface HintProps {
    className?: string;
    text: string;
    svg: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Hint = ({ className, svg, text }: HintProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img src={svg} />
            <p>{text}</p>
        </div>
    );
};
