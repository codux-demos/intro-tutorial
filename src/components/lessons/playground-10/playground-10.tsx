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

import { Hint_01, Hint_02, Hint_03, Hint_04 } from '../../../assets/hints';

import { Card } from '../card/card';
import { Hint } from '../../hint/hint';
import { content } from '../../../content';

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
                    hint={
                        <Hint
                            text={content.fontHintText}
                            svg={Hint_02}
                            className={styles.fontHint}
                        />
                    }
                    price="100"
                    className={styles.poster}
                    imgSrc={Poster_01}
                />
                <Card price="100" className={styles.poster} imgSrc={Poster_02} />
                <Card
                    hint={
                        <Hint
                            text={content.componentHintText}
                            svg={Hint_01}
                            className={styles.componentHint}
                        />
                    }
                    price="100"
                    className={styles.poster}
                    imgSrc={Poster_03}
                />
                <Card
                    hint={
                        <Hint
                            text={content.buttonHintText}
                            svg={Hint_04}
                            className={styles.buttonHint}
                        />
                    }
                    price="100"
                    className={styles.poster}
                    imgSrc={Poster_04}
                />
                <Card price="100" className={styles.poster} imgSrc={Poster_05} />
                <Card
                    hint={
                        <Hint
                            text={content.layoutHintText}
                            svg={Hint_03}
                            className={styles.layoutHint}
                        />
                    }
                    price="100"
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
