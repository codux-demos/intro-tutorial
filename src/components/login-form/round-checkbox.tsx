import React from 'react';
import styles from './round-checkbox.module.scss';
import classNames from 'classnames';

export interface RoundCheckboxProps {
    className?: string;
    name?: string;
    id?: string;
}

export const RoundCheckbox: React.FC<RoundCheckboxProps> = ({ className, name, id }) => (
    <label className={classNames(styles.roundCheckboxContainer, className)}>
        <input className={styles.roundCheckbox} type="checkbox" name={name} id={id} />
        <span className={styles.checkmark} />
    </label>
);
