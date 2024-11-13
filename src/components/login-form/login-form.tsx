import React, { useState } from 'react';
import styles from './login-form.module.scss';
import classNames from 'classnames';
import { FloatingInput } from './floating-input';
import { RoundCheckbox } from './round-checkbox';
import { ForgotPasswordView } from '../forgot-password-view/forgot-password-view';
import { Dialog } from '../dialog/dialog';
import { RainbowLoader } from '../rainbow-loader/rainbow-loader';

export interface LoginFormProps {
    className?: string;
    errorInUsername?: string;
    errorInPassword?: string;
    username?: string;
    password?: string;
    isLoading?: boolean;
    showForgotPasswordView?: boolean;
    onForgotPasswordSubmit?: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({
    className,
    errorInUsername,
    errorInPassword,
    username,
    password,
    isLoading,
    showForgotPasswordView,
    onForgotPasswordSubmit,
}) => {
    const [dialogIsOpen, setDialogIsOpen] = useState(false);

    const handleClose = () => setDialogIsOpen(false);

    const handleForgotPasswordClick = () => setDialogIsOpen(true);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
    };

    if (isLoading) return <RainbowLoader className={className} />;

    if (showForgotPasswordView)
        return <ForgotPasswordView className={className} onSubmit={onForgotPasswordSubmit} />;

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
            <Dialog open={dialogIsOpen} onClose={handleClose}>
                <ForgotPasswordView
                    className={styles.forgotPasswordDialog}
                    onClose={handleClose}
                    autofocus={true}
                    onSubmit={handleClose}
                />
            </Dialog>
        </form>
    );
};
