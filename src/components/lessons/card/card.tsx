import classNames from 'classnames';
import styles from './card.module.scss';

export interface CardProps {
    className?: string;
    title?: string;
    description?: string;
    price?: string;
    added?: boolean;
    imgSrc: string;
    hint?: JSX.Element;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Card = ({
    className,
    title = 'Bauhaus',
    description = 'BAUHAUS BAUHAUS',
    price,
    added = false,
    imgSrc,
    hint
}: CardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img src={imgSrc} alt="" className={styles.image} />
            <div className={styles.layout}>
                <div className={styles.cardetails}>
                    <div className={styles.details}>
                        <span className={styles.title}>{title} </span>
                        <div className={styles.price}>
                            <span>${price}</span>
                        </div>
                    </div>
                    <span className={styles.description}>{description}</span>
                </div>
                {hint}
                <div>
                    <button className={styles.button}>
                        {added ? 'Remove From Cart' : 'Quickbuy'}
                    </button>
                </div>
            </div>
        </div>
    );
};
