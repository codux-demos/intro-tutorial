import styles from './introduction-card.module.scss';
import CoduxLogo from '~/assets/codux-logo.svg?react';
import Facebook from '~/assets/facebook.svg?react';
import XLogo from '~/assets/x.svg?react';
import DiscordLogo from '~/assets/discord.svg?react';
import YoutubeLogo from '~/assets/youtube.svg?react';
import MediumLogo from '~/assets/medium.svg?react';

export const IntroductionCard = () => (
    <div className={styles.root}>
        <main className={styles.body}>
            <p className={styles.title}>Let’s start building with Codux!</p>
            <p className={styles.description}>
                Just like with grid layout, you can use flex layout to arange elements. Let’s try
                it: Select div.layer1 and then choose the .layer1 Selector in the Styles Panel.
                <br />
                Did you manage to plug the holes?
            </p>
        </main>
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
