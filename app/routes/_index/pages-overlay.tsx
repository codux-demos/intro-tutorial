import styles from './pages-overlay.module.scss';
import { TaskSymbol } from '~/components/common/task-symbol/task-symbol';

export const PagesOverlay = () => {
    return (
        <div className={styles.pagesOverlay}>
            <h1>Create New Page</h1>
            <p>
                Pages are screens people visit on your site, each with its own URL, defining your
                site's structure.
            </p>
            <p>
                Go to the <TaskSymbol name="pages" /> {' '} <strong>Pages Panel</strong> Click the{' '}
                <TaskSymbol name="addPage" /> <strong>New Page</strong> icon and enter a name to set
                URL.
            </p>
        </div>
    );
};
