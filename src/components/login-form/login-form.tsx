import React, { useState } from 'react';
import styles from './login-form.module.scss';
import classNames from 'classnames';
import { FloatingInput } from './floating-input';
import { RoundCheckbox } from './round-checkbox';
import { ForgotPasswordDialogView } from '../forgot-password-dialog/forgot-password-dialog-view';
import { DialogBackdrop } from '../forgot-password-dialog/dialog-backdrop';

export interface LoginFormProps {
    className?: string;
    errorInUsername?: string;
    errorInPassword?: string;
    username?: string;
    password?: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({
    className,
    errorInUsername,
    errorInPassword,
    username,
    password,
}) => {
    const [dialogIsOpen, setDialogIsOpen] = useState(false);

    const handleClose = () => setDialogIsOpen(false);

    const handleForgotPasswordClick = () => setDialogIsOpen(true);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
    };

    return (
        <form className={classNames(styles.formContainer, className)} onSubmit={handleSubmit}>
            <h2 className={styles.formHeader}>
                Welcome <br /> Back :)
            </h2>
            <FloatingInput label="Username" error={errorInUsername} value={username} />
            <FloatingInput
                type="password"
                label="Password"
                error={errorInPassword}
                value={password}
            />
            <div className={styles.rememberMe}>
                <RoundCheckbox name="rememberMe" />
                <span>Remember me next time!</span>
            </div>
            <button
                className={styles.confirmButton}
                type="submit"
                disabled={!!errorInUsername || !!errorInPassword}
            >
                Sign In
            </button>
            <button className={styles.forgotPassword} onClick={handleForgotPasswordClick}>
                Forgot your password?
            </button>
            <DialogBackdrop open={dialogIsOpen} onClose={handleClose}>
                <ForgotPasswordDialogView
                    className={styles.forgotPasswordDialog}
                    onClose={handleClose}
                />
            </DialogBackdrop>
        </form>
    );
};
