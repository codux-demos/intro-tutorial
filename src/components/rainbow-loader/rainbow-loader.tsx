import React from 'react';
import styles from './rainbow-loader.module.scss';
import classNames from 'classnames';

export interface RainbowLoaderProps {
    className?: string;
}

export const RainbowLoader: React.FC<RainbowLoaderProps> = ({ className }) => (
    <div className={classNames(styles.container, className)}>
        <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M300 25.641C148.476 25.641 25.641 148.476 25.641 300H0C0 134.315 134.315 0 300 0V25.641Z"
                fill="#F486C9"
            />
            <path
                d="M300 51.2805C162.637 51.2805 51.2825 162.635 51.2825 299.998H76.9235C76.9235 176.796 176.798 76.9215 300 76.9215V51.2805Z"
                fill="#6A55A2"
            />
            <path
                d="M300.001 102.563C190.96 102.563 102.565 190.958 102.565 299.999H128.206C128.206 205.119 205.121 128.204 300.001 128.204V102.563Z"
                fill="#7FC2F4"
            />
            <path
                d="M300.001 153.845C219.283 153.845 153.847 219.281 153.847 299.999H179.488C179.488 233.442 233.444 179.486 300.001 179.486V153.845Z"
                fill="#92D0AB"
            />
            <path
                d="M300.002 205.128C247.605 205.128 205.13 247.603 205.13 300H230.771C230.771 261.765 261.767 230.769 300.002 230.769V205.128Z"
                fill="#FF5B2B"
            />
        </svg>
        <span className={styles.loaderText}>
            Hang in there, things <br /> are happening...
        </span>
    </div>
);
