import styles from './introduction-card.module.scss';

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
    </div>
);
