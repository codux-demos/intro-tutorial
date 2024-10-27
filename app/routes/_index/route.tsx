import type { MetaFunction } from '@remix-run/node';
import styles from './home-page.module.scss';
import { IntroductionCard } from '~/components/introduction-card/introduction-card';
import { LESSONS } from './lessons';
import { Link } from '@remix-run/react';
import CoduxLogo from '../../../src/assets/codux-logo.svg?react';
import Facebook from '../../../src/assets/facebook.svg?react';
import XLogo from '../../../src/assets/x.svg?react';
import DiscordLogo from '../../../src/assets/discord.svg?react';
import YoutubeLogo from '../../../src/assets/youtube.svg?react';
import MediumLogo from '../../../src/assets/medium.svg?react';

export const meta: MetaFunction = () => {
    return [{ title: 'Intro Tutorial' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function HomePage() {
    return (
        <div className={styles.root}>
            <div className={styles.gridContainer}>
                <div className={`${styles.gridItem} ${styles.gridItemLarge}`}>
                    <IntroductionCard />
                </div>
                {LESSONS.map((item, index) => (
                    <Link to={item.url} key={index}>
                        <div
                            className={styles.gridItem}
                            style={
                                {
                                    '--lesson-cover-image': item.lessonCoverImage,
                                    '--lesson-bg-color': item.backgroundColor,
                                } as React.CSSProperties
                            }
                        >
                            <p className={styles.cardTitle}>{item.title}</p>
                            <button className={styles.startLessonButton}>Start Lesson</button>
                            <p className={styles.cardNumber}>{`LESSON ${item.lessonNumber}`}</p>
                        </div>
                    </Link>
                ))}
            </div>
            <footer className={styles.footer}>
                <div className={styles.footerSection}>
                    <CoduxLogo />
                    <p>
                        Powered by <span className={styles.boldText}>Codux</span>.
                    </p>
                </div>
                <div className={styles.socials}>
                    <XLogo />
                    <Facebook />
                    <DiscordLogo />
                    <YoutubeLogo />
                    <MediumLogo />
                </div>
            </footer>
        </div>
    );
}
