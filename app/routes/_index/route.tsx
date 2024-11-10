import type { MetaFunction } from '@remix-run/node';
import styles from './home-page.module.scss';
import { IntroductionCard } from '~/components/introduction-card/introduction-card';
import { LESSONS } from './lessons';
import { Link } from '@remix-run/react';
import CoduxLogo from '../../../src/assets/codux-logo.svg?react';
import XLogo from '../../../src/assets/x.svg?react';
import DiscordLogo from '../../../src/assets/discord.svg?react';
import YoutubeLogo from '../../../src/assets/youtube.svg?react';
import { useState } from 'react';

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
                {LESSONS.map((lesson, index) => (
                    <Lesson lesson={lesson} key={index} />
                ))}
            </div>
            <footer className={styles.footer}>
                <div className={styles.poweredBy}>
                    <CoduxLogo />
                    <p>
                        Powered by <strong>Codux</strong>.
                    </p>
                </div>
                <div className={styles.socials}>
                    <a href="https://x.com/coduxide" target="_blank">
                        <XLogo />
                    </a>
                    <a href="https://discord.com/channels/1047628695675863150" target="_blank">
                        <DiscordLogo />
                    </a>
                    <a href="https://www.youtube.com/@CoduxIDE" target="_blank">
                        <YoutubeLogo />
                    </a>
                </div>
            </footer>
        </div>
    );
}

function Lesson({ lesson }: { lesson: (typeof LESSONS)[number] }) {
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);

    function openOVerlay() {
        if (lesson.url) {
            return;
        }

        setIsOverlayVisible(true);
    }

    function closeOverlay() {
        setIsOverlayVisible(false);
    }

    const lessonCard = (
        <div
            className={styles.gridItem}
            style={
                {
                    '--lesson-cover-image': lesson.lessonCoverImage,
                    '--lesson-bg-color': lesson.backgroundColor,
                } as React.CSSProperties
            }
        >
            <div className={styles.flipCardInner}>
                <div className={styles.flipCardFront}>
                    <p className={styles.cardTitle}>{lesson.title}</p>
                    <p className={styles.cardFooter}>{`LESSON ${lesson.lessonNumber}`}</p>
                </div>
                <div className={styles.flipCardBack}>
                    {isOverlayVisible && lesson.overlay}
                    {!isOverlayVisible && <p className={styles.cardTitleFlipped}>{lesson.title}</p>}
                    <button onClick={openOVerlay} className={styles.startLessonButton}>
                        Start Lesson
                    </button>
                    {isOverlayVisible ? (
                        <button onClick={closeOverlay} className={styles.cardFooter}>
                            CLOSE LESSON
                        </button>
                    ) : (
                        <p className={styles.cardFooter}>{`LESSON ${lesson.lessonNumber}`}</p>
                    )}
                </div>
            </div>
        </div>
    );

    return lesson.url ? <Link to={lesson.url}>{lessonCard}</Link> : lessonCard;
}
