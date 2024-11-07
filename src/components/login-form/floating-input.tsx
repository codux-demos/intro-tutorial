import React from 'react';
import styles from './floating-input.module.scss';
import classNames from 'classnames';

export interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    label: string;
    id?: string;
    type?: string;
}

export const FloatingInput: React.FC<FloatingInputProps> = ({
    className,
    label,
    id,
    type = 'text',
    ...props
}) => (
    <div className={classNames(styles.inputContainer, className)}>
        <input className={styles.floatingInput} type={type} id={id} name={id} {...props} />
        <label className={styles.label} htmlFor={id}>
            {label}
        </label>
    </div>
);
