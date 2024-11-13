import React from 'react';
import classNames from 'classnames';
import styles from './forgot-password-view.module.scss';
import { FloatingInput } from '../login-form/floating-input';

export interface ForgotPasswordViewProps {
    onClose?: () => void;
    email?: string;
    autofocus?: boolean;
}

export const ForgotPasswordView: React.FC<
    ForgotPasswordViewProps & React.FormHTMLAttributes<HTMLFormElement>
> = ({ className, onClose, onSubmit, email, autofocus, ...props }) => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        onSubmit?.(e);
    };
    return (
        <form
            className={classNames(styles.dialogContainer, className)}
            onClick={(e) => e.stopPropagation()}
            onSubmit={handleSubmit}
            {...props}
        >
            <button className={styles.dialogCloseButton} onClick={onClose}>
                &times;
            </button>
            <h2 className={styles.dialogHeader}>
                Forgot it?
                <br />
                Don't Worry
            </h2>
            <FloatingInput
                autoFocus={autofocus}
                label="Your Email"
                id="email"
                type="email"
                value={email}
            />
            <p className={styles.dialogDescription}>
                Enter the email address linked to your account and we’ll send you an email to reset
                your password.
            </p>
            <button className={styles.resetPasswordButton} type="submit">
                Reset Password
            </button>
        </form>
    );
};
