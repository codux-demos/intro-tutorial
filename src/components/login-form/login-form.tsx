import React from 'react';
import styles from './login-form.module.scss';
import classNames from 'classnames';

export interface LoginFormProps {
    className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({ className }) => (
    <form className={classNames(className, styles.form1)}>
        <h2 className={styles.header1}>
            Welcome <br /> Back :)
        </h2>
        <div className={styles.inputContainer}>
            <input className={styles.floatingInput} type="text" id="username" name="username" />
            <label className={styles.label} htmlFor="username">
                Username:
            </label>
        </div>
        <br />
        <div className={styles.inputContainer}>
            <input className={styles.floatingInput} type="password" id="password" name="password" />
            <label className={styles.label} htmlFor="password">
                Password:
            </label>
        </div>
        <label className={styles.roundCheckboxContainer}>
            <input className={styles.roundCheckbox} type="checkbox" name="rememberMe" />
            <span className={styles.checkmark}></span>
        </label>
        <span>Remember me next time!</span>
        <button className={styles.confirmButton} type="submit">
            Sign In
        </button>
        <a className={styles.forgotPassword} href="/forgot-password">
            Forgot your password?
        </a>
    </form>
);
