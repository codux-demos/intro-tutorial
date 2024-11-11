import React, { useState } from 'react';
import styles from './login-form.module.scss';
import classNames from 'classnames';
import { FloatingInput } from './floating-input';
import { RoundCheckbox } from './round-checkbox';
import { ForgotPasswordDialog } from '../forgot-password-dialog/forgot-password-dialog';

export interface LoginFormProps {
    className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({ className }) => {
    const [dialogIsOpen, setDialogIsOpen] = useState(false);

    const handleClose = () => setDialogIsOpen(false);

    const handleForgotPasswordClick = () => setDialogIsOpen(true);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
    };

    return (
        <form className={classNames(className, styles.form1)} onSubmit={handleSubmit}>
            <h2 className={styles.header1}>
                Welcome <br /> Back :)
            </h2>
            <FloatingInput label="Username" error className={styles.formInput} />
            <FloatingInput type="password" label="Password" className={styles.formInput} />
            <div className={styles.rememberMe}>
                <RoundCheckbox name="rememberMe" />
                <span>Remember me next time!</span>
            </div>
            <button className={styles.confirmButton} type="submit">
                Sign In
            </button>
            <span className={styles.forgotPassword} onClick={handleForgotPasswordClick}>
                Forgot your password?
            </span>
            <ForgotPasswordDialog isOpen={dialogIsOpen} onClose={handleClose} />
        </form>
    );
};
