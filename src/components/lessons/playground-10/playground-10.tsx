import { Hint_01, Hint_02, Hint_03, Hint_04 } from '../../../assets/hints';

import { Card } from '../card/card';
import { Hint } from '../../hint/hint';
import { content } from '../../../content';
import classNames from 'classnames';
import styles from './playground-10.module.scss';

export interface Playground10Props {
    className?: string;
}

export const Playground10 = ({ className }: Playground10Props) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div className={styles.content}>
                <div className={styles.header}>
                    Unleash your creativity with Codux. Customize fonts, colors, and layouts to
                    craft a masterpiece tailored to your vision. Rename these posters and don&apos;t
                    hold back on the creativity. Your art, your rules.
                </div>
                <div className={styles.gallery}>
                    <Card
                        hint={
                            <Hint
                                text={content.fontHintText}
                                svg={Hint_02}
                                className={classNames(styles.fontHint, styles.hint)}
                                textClassName={styles.fontHintText}
                            />
                        }
                        price="640"
                        className={styles.poster}
                        imgSrc={
                            'https://wixmp-b7f7090100b13623109851bc.wixmp.com/posters/poster_01.svg'
                        }
                    />
                    <Card
                        price="1300"
                        className={styles.poster}
                        imgSrc={
                            'https://wixmp-b7f7090100b13623109851bc.wixmp.com/posters/poster_02.svg'
                        }
                    />

                    <Card
                        hint={
                            <Hint
                                text={content.componentHintText}
                                svg={Hint_01}
                                className={classNames(styles.componentHint, styles.hint)}
                                textClassName={styles.componentHintText}
                            />
                        }
                        price="3640"
                        className={styles.poster}
                        imgSrc={
                            'https://wixmp-b7f7090100b13623109851bc.wixmp.com/posters/poster_03.svg'
                        }
                    />
                    <Card
                        hint={
                            <Hint
                                text={content.buttonHintText}
                                svg={Hint_04}
                                className={classNames(styles.buttonHint, styles.hint)}
                                textClassName={styles.buttonHintText}
                            />
                        }
                        price="1000"
                        className={styles.poster}
                        imgSrc={
                            'https://wixmp-b7f7090100b13623109851bc.wixmp.com/posters/poster_04.svg'
                        }
                    />
                    <Card
                        price="6348"
                        className={styles.poster}
                        imgSrc={
                            'https://wixmp-b7f7090100b13623109851bc.wixmp.com/posters/poster_05.svg'
                        }
                    />
                    <Card
                        hint={
                            <Hint
                                text={content.layoutHintText}
                                svg={Hint_03}
                                className={classNames(styles.layoutHint, styles.hint)}
                                textClassName={styles.layoutHintText}
                            />
                        }
                        price="582"
                        className={styles.poster}
                        imgSrc={
                            'https://wixmp-b7f7090100b13623109851bc.wixmp.com/posters/poster_06.svg'
                        }
                    />
                </div>
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
