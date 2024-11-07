import React from 'react';
import styles from './login-form.module.scss';
import classNames from 'classnames';
import { FloatingInput } from './floating-input';
import { RoundCheckbox } from './round-checkbox';

export interface LoginFormProps {
    className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({ className }) => (
    <form className={classNames(className, styles.form1)}>
        <h2 className={styles.header1}>
            Welcome <br /> Back :)
        </h2>
        <FloatingInput label="Username" id="username" />
        <br />
        <FloatingInput type="password" label="Password" id="password" />
        <div className={styles.rememberMe}>
            <RoundCheckbox name="rememberMe" />
            <span>Remember me next time!</span>
        </div>
        <button className={styles.confirmButton} type="submit">
            Sign In
        </button>
        <a className={styles.forgotPassword} href="/forgot-password">
            Forgot your password?
        </a>
    </form>
);
