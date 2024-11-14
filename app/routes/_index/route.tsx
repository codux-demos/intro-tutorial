import type { MetaFunction } from '@remix-run/node';
import styles from './home-page.module.scss';
import { IntroductionCard } from '~/components/introduction-card/introduction-card';
import { LESSONS } from './lessons';
import { Link } from '@remix-run/react';
import CoduxLogo from '../../../src/assets/codux-logo.svg?react';
import XLogo from '../../../src/assets/x.svg?react';
import DiscordLogo from '../../../src/assets/discord.svg?react';
import YoutubeLogo from '../../../src/assets/youtube.svg?react';
import DismissSymbol from '../../../src/assets/dismiss-symbol.svg?react';
import { useState } from 'react';
import classNames from 'classnames';

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
                    <Lesson key={index} lesson={lesson} />
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
    const [isShowingContent, setContentVisibility] = useState<boolean>(false);

    function openContent() {
        if (lesson.url) {
            return;
        }

        setContentVisibility(true);
    }

    function closeContent() {
        setContentVisibility(false);
    }

    const lessonCard = (
        <div
            className={styles.gridItem}
            style={
                {
                    '--lesson-cover-image': `url(${lesson.lessonCoverImage})`,
                    '--lesson-bg-color': lesson.backgroundColor,
                    '--footer-text-color': lesson.footerTextColor,
                } as React.CSSProperties
            }
        >
            <div
                className={classNames(styles.flipCardInner, {
                    [styles.overlayOpen]: !!isShowingContent,
                })}
            >
                <div className={styles.flipCardFront}>
                    <header className={classNames(styles.header, styles.lessonName)}>
                        <p className={styles.cardTitleFlipped}>{lesson.header}</p>
                    </header>
                    <p className={styles.cardTitle}>{lesson.title}</p>
                    <p className={styles.frontCardFooter}>{`LESSON ${lesson.lessonNumber}`}</p>
                </div>
                <div className={styles.flipCardBack}>
                    <header
                        className={classNames(styles.header, {
                            [styles.lessonContentHeader]: isShowingContent,
                        })}
                    >
                        {isShowingContent ? (
                            <button onClick={closeContent} className={styles.dismiss}>
                                <DismissSymbol />
                            </button>
                        ) : (
                            <p className={styles.cardTitleFlipped}>{lesson.header}</p>
                        )}
                    </header>
                    {isShowingContent && lesson.lessonContent && <lesson.lessonContent />}
                    {!isShowingContent && (
                        <button onClick={openContent} className={styles.startLessonButton}>
                            Start Lesson
                        </button>
                    )}
                    {isShowingContent ? (
                        <button onClick={closeContent} className={styles.cardFooter}>
                            CLOSE LESSON
                        </button>
                    ) : (
                        <p className={styles.backCardFooter}>{`LESSON ${lesson.lessonNumber}`}</p>
                    )}
                </div>
            </div>
        </div>
    );

    return lesson.url ? <Link to={lesson.url}>{lessonCard}</Link> : lessonCard;
}
