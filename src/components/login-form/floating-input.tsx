import React, { useId, useState } from 'react';
import styles from './floating-input.module.scss';
import classNames from 'classnames';

export interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    className?: string;
    label: string;
    id?: string;
    type?: string;
    error?: string;
}

export const FloatingInput: React.FC<FloatingInputProps> = ({
    className,
    label,
    id = useId(),
    type = 'text',
    error,
    value: initialValue,
    ...props
}) => {
    const [value, setValue] = useState(initialValue);
    const [isFocused, setIsFocused] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => setValue(e.target.value);

    const handleFocusChange: React.FocusEventHandler<HTMLInputElement> = (e) =>
        setIsFocused(e.type === 'focus');

    return (
        <div className={classNames(styles.inputContainer, className)}>
            <input
                className={classNames(styles.floatingInput, error && styles.error)}
                type={type}
                id={id}
                name={label}
                onChange={handleChange}
                onBlur={handleFocusChange}
                onFocus={handleFocusChange}
                value={value}
                {...props}
            />
            <label
                className={classNames(styles.label, { [styles.active]: !!isFocused || !!value })}
                htmlFor={label}
            >
                {label}
            </label>
            <span className={styles.errorMessage}>{error}</span>
        </div>
    );
};
