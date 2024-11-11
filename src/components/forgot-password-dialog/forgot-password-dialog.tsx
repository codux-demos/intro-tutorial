import React, { useEffect } from 'react';
import classNames from 'classnames';
import styles from './forgot-password-dialog.module.scss';
import { FloatingInput } from '../login-form/floating-input';

export interface ForgotPasswordDialogProps {
    className?: string;
    open?: boolean;
    onClose?: () => void;
    email?: string;
}

export const ForgotPasswordDialog: React.FC<ForgotPasswordDialogProps> = ({
    className,
    open = false,
    onClose,
    email,
}) => {
    if (!open) return;

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose?.();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return (
        <div className={styles.dialogBackdrop} onClick={onClose}>
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
                    Enter the email address linked to your account and we’ll send you an email to
                    reset your password.
                </p>
                <button className={styles.resetPasswordButton} onClick={onClose}>
                    Reset Password
                </button>
            </div>
        </div>
    );
};
