import React, { useState } from 'react';
import styles from './floating-input.module.scss';
import classNames from 'classnames';

export interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    label: string;
    id?: string;
    type?: string;
    error?: boolean;
}

export const FloatingInput: React.FC<FloatingInputProps> = ({
    className,
    label,
    id,
    type = 'text',
    error,
    value: initialValue,
    ...props
}) => {
    const [value, setValue] = useState(initialValue);
    const [isFocused, setIsFocused] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    const handleBlur = () => setIsFocused(false);

    const handleFocus = () => setIsFocused(true);

    return (
        <div className={classNames(styles.inputContainer, className)}>
            <input
                className={classNames(styles.floatingInput, error && styles.error)}
                type={type}
                id={id}
                name={id}
                onChange={handleChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                value={value}
                {...props}
            />
            <label
                className={classNames(styles.label, (isFocused || !!value) && styles.active)}
                htmlFor={id}
            >
                {label}
            </label>
            <span className={styles.errorMessage}>This field is required</span>
        </div>
    );
};
