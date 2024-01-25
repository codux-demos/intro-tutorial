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
            <div className={styles.footer}>
                <span className={styles.title}>{title}
                    <span className={styles.price}>{price}</span>
                </span>
                <span className={styles.description}>{description}</span>
                <div className={styles['footer-bottom']}>
                    <button className={styles.button}>{added ? 'Remove From Cart' : 'Add To Cart'}</button>
                </div>
            </div>
        </div>
    );
};
