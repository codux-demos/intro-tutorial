import { Link } from '@remix-run/react';
import CoduxLogo from '../../../src/assets/codux-logo.svg?react';
import styles from './lessons-header.module.scss';

export const LessonsHeader = () => {
    return (
        <header className={styles.root}>
            <Link to="/">
                <CoduxLogo />
            </Link>
            <p>
                Powered by <span className={styles.boldText}>Codux</span>
            </p>
        </header>
    );
};
