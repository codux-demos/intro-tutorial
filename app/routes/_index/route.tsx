import type { MetaFunction } from '@remix-run/node';
import styles from './home-page.module.scss';
import { IntroductionCard } from '~/components/introduction-card/introduction-card';
import { LESSONS } from './lessons';

export const meta: MetaFunction = () => {
    return [{ title: 'Intro Tutorial' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function HomePage() {
    return (
        <div className={styles.gridContainer}>
            <div className={`${styles.gridItem} ${styles.gridItemLarge}`}>
                <IntroductionCard />
            </div>
            {LESSONS.map((item, index) => (
                <div
                    key={index}
                    className={styles.gridItem}
                    style={{ backgroundColor: `${item.backgroundColor}` }}
                >
                    <span />
                    <p className={styles.cardTitle}>{item.title}</p>
                    <p className={styles.cardNumber}>{`LESSON ${item.lessonNumber}`}</p>
                </div>
            ))}
        </div>
    );
}
