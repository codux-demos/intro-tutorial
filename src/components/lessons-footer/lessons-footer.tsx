import XLogo from '../../../src/assets/x.svg?react';
import DiscordLogo from '../../../src/assets/discord.svg?react';
import YoutubeLogo from '../../../src/assets/youtube.svg?react';
import styles from './lessons-footer.module.scss';
import { Link } from '@remix-run/react';

interface LessonsFooterProps {
    previousUrl?: string;
    nextUrl?: string;
}

export const LessonsFooter = ({ nextUrl, previousUrl }: LessonsFooterProps) => (
    <footer className={styles.root}>
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

        <div className={styles.navButtons}>
            {previousUrl && (
                <Link to={previousUrl} className={styles.boldText}>
                    PREVIOUS
                </Link>
            )}
            {nextUrl && previousUrl && <span>/</span>}
            {nextUrl && (
                <Link to={nextUrl} className={styles.boldText}>
                    NEXT
                </Link>
            )}
        </div>
    </footer>
);
