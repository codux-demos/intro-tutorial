import React from 'react';
import classNames from 'classnames';
import styles from './forgot-password-dialog-view.module.scss';
import { FloatingInput } from '../login-form/floating-input';

export interface ForgotPasswordDialogViewProps {
    onClose?: () => void;
    email?: string;
    autofocus?: boolean;
}

export const ForgotPasswordDialogView: React.FC<
    ForgotPasswordDialogViewProps & React.FormHTMLAttributes<HTMLFormElement>
> = ({ className, onClose, email, autofocus, ...props }) => {
    return (
        <form
            className={classNames(styles.dialogContainer, className)}
            onClick={(e) => e.stopPropagation()}
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
