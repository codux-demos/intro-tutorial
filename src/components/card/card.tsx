import classNames from 'classnames';
import styles from './card.module.scss';

export interface CardProps {
    className?: string;
    title?: string;
    description?: string;
    price?: string;
    added?: boolean;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Card = ({ className, title, description, price, added = false }: CardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img
                src="https://images.unsplash.com/photo-1622542796254-5b9c46ab0d2f?q=80&amp;w=3456&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dwixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
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
