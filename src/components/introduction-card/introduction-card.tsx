import styles from './introduction-card.module.scss';
import { TaskSymbol } from '~/components/common/task-symbol/task-symbol';

export const IntroductionCard = () => (
    <div className={styles.root}>
        <main className={styles.body}>
            <p className={styles.title}>Let’s start building with Codux!</p>
            <p className={styles.description}>
                Switch to <TaskSymbol name="responsivePreview" /> mode in the top right corner of
                the stage. Then click on the first lesson to start the tutorial.
                <br />
            </p>
        </main>
    </div>
);
