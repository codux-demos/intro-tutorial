import classNames from 'classnames';
import styles from './card.module.scss';

export interface CardProps {
    className?: string;
    title?: string;
    description?: string;
    price?: string;
    added?: boolean;
    imgSrc: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Card = ({ className, title, description, price, added = false, imgSrc }: CardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img
                src={imgSrc}
                alt=""
                className={styles.image}
            />
            <div>
                <div className={styles.details}>
                    <div className={styles.description}>
                        <span>text</span>
                        <span>text</span></div>
                    <div className={styles.price}>
                        <span>text</span></div>
                </div>
                <button className={styles.button}>{added ? 'Remove From Cart' : 'Add To Cart'}</button></div>
        </div>
    );
};
