import classNames from 'classnames';
import styles from './playground-10.module.scss';
import {
    Poster_01,
    Poster_02,
    Poster_03,
    Poster_04,
    Poster_05,
    Poster_06,
} from '../../../assets/posters';
import { Card } from '../card/card';

export interface Playground10Props {
    className?: string;
}

export const Playground10 = ({ className }: Playground10Props) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.header}>
                Unleash your creativity with Codux. Customize fonts, colors, and layouts to craft a
                masterpiece tailored to your vision. Switch to preview mode to view specific tasks.
                Your art, your rules.
            </div>
            <div className={styles.gallery}>
                <Card
                    description="product description"
                    price="$100"
                    title="Product Title"
                    className={styles.poster}
                    imgSrc={Poster_01}
                />
                <Card
                    description="product description"
                    price="$100"
                    title="Product Title"
                    className={styles.poster}
                    imgSrc={Poster_02}
                />
                <Card
                    description="product description"
                    price="$100"
                    title="Product Title"
                    className={styles.poster}
                    imgSrc={Poster_03}
                />
                <Card
                    description="product description"
                    price="$100"
                    title="Product Title"
                    className={styles.poster}
                    imgSrc={Poster_04}
                />
                <Card
                    description="product description"
                    price="$100"
                    title="Product Title"
                    className={styles.poster}
                    imgSrc={Poster_05}
                />
                <Card
                    description="product description"
                    price="$100"
                    title="Product Title"
                    className={styles.poster}
                    imgSrc={Poster_06}
                />
            </div>
            <div className={styles.footer}>
                <div className={styles.divider}>
                    <span className={styles['footer-text']}>text</span>
                </div>
                This is the footer
            </div>
        </div>
    );
};
