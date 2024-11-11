import React, { useState } from 'react';
import styles from './login-form.module.scss';
import classNames from 'classnames';
import { FloatingInput } from './floating-input';
import { RoundCheckbox } from './round-checkbox';
import { ForgotPasswordDialog } from '../forgot-password-dialog/forgot-password-dialog';

export interface LoginFormProps {
    className?: string;
    errorInUsername?: boolean;
    errorInPassword?: boolean;
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
        <form className={classNames(className, styles.formContainer)} onSubmit={handleSubmit}>
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
                disabled={errorInUsername || errorInPassword}
            >
                Sign In
            </button>
            <span className={styles.forgotPassword} onClick={handleForgotPasswordClick}>
                Forgot your password?
            </span>
            <ForgotPasswordDialog
                className={styles.forgotPasswordDialog}
                open={dialogIsOpen}
                onClose={handleClose}
            />
        </form>
    );
};
