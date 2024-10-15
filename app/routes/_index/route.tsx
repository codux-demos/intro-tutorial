import type { MetaFunction } from '@remix-run/node';
import styles from './home-page.module.scss';
import { IntroductionCard } from '~/components/introduction-card/introduction-card';

export const meta: MetaFunction = () => {
    return [{ title: 'Intro Tutorial' }, { name: 'description', content: 'Welcome to Remix!' }];
};

export default function HomePage() {
    const items = [1, 2, 3, 4, 5, 6];
    return (
        <div className={styles.gridContainer}>
            <div className={`${styles.gridItem} ${styles.gridItemLarge}`}>
                <IntroductionCard />
            </div>
            {items.map((item, index) => (
                <div key={index} className={styles.gridItem}>
                    Item {item}
                </div>
            ))}
        </div>
    );
}
