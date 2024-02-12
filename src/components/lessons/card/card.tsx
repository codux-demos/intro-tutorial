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

export const Card = ({
    className,
    title = 'Bauhaus',
    description = 'BAUHAUS BAUHAUS',
    price,
    added = false,
    imgSrc,
    hint,
}: CardProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.hintposition}>
                {hint}
                <img src={imgSrc} alt="" className={styles.image} />
            </div>
            <div className={styles.layout}>
                <div className={styles.cardetails}>
                    <span className={styles.title}>{title} </span>
                    <div className={styles.price}>
                        <span>${price}</span>
                    </div>

                    <span className={styles.description}>{description}</span>
                </div>
                <button className={styles.button}>{added ? 'Remove From Cart' : 'Quickbuy'}</button>
            </div>
        </div>
    );
};
