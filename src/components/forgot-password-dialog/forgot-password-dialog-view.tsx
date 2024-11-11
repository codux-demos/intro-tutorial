import React from 'react';
import classNames from 'classnames';
import styles from './forgot-password-dialog-view.module.scss';
import { FloatingInput } from '../login-form/floating-input';

export interface ForgotPasswordDialogViewProps {
    className?: string;
    onClose?: () => void;
    email?: string;
}

export const ForgotPasswordDialogView: React.FC<ForgotPasswordDialogViewProps> = ({
    className,
    onClose,
    email,
}) => {
    return (
        <div
            className={classNames(styles.dialogContainer, className)}
            onClick={(e) => e.stopPropagation()}
        >
            <button className={styles.dialogCloseButton} onClick={onClose}>
                &times;
            </button>
            <h2 className={styles.dialogHeader}>
                Forgot it?
                <br />
                Don't Worry
            </h2>
            <FloatingInput label="Your Email" id="email" type="email" value={email} />
            <p className={styles.dialogDescription}>
                Enter the email address linked to your account and we’ll send you an email to reset
                your password.
            </p>
            <button className={styles.resetPasswordButton} onClick={onClose}>
                Reset Password
            </button>
        </div>
    );
};
