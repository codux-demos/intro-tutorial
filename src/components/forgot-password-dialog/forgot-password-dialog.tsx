import React from 'react';
import classNames from 'classnames';
import styles from './forgot-password-dialog.module.scss';
import { FloatingInput } from '../login-form/floating-input';

export interface ForgotPasswordDialogProps {
    className?: string;
    isOpen?: boolean;
    onClose?: () => void;
}

export const ForgotPasswordDialog: React.FC<ForgotPasswordDialogProps> = ({
    className,
    isOpen = true,
    onClose,
}) => {
    if (!isOpen) return;

    return (
        <div className={classNames(styles.dialogOverlay, className)} onClick={onClose}>
            <div className={styles.dialogContent} onClick={(e) => e.stopPropagation()}>
                <button className={styles.dialogCloseButton} onClick={onClose}>
                    &times;
                </button>
                <h2 className={styles.dialogHeader}>
                    Forgot it?
                    <br />
                    Don't Worry
                </h2>
                <FloatingInput label="Your Email" id="email" type="email" />
            </div>
        </div>
    );
};
