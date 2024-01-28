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
import { Icon } from '../../common/icon/icon';

export interface Playground10Props {
    className?: string;
}

export const Playground10 = ({ className }: Playground10Props) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.header}>
                Unleash your creativity with Codux. Customize fonts, colors, and layouts to craft a
                masterpiece tailored to your vision. Give your posters unique names and make it
                yours. Your art, your rules.
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
                <span className={styles['footer-text']}>
                    This Gallery is powered by Codux. Explore new ways to design on real, and learn
                    more about working on Codux{' '}
                    <a href="https://help.codux.com/kb/en/article/kb21821">here</a>;
                </span>
            </div>
        </div>
    );
};
