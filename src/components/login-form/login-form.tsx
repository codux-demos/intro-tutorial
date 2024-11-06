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
        <div>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" />
        </div>
        <div>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" />
        </div>
        <div>
            <label>
                <input type="checkbox" name="rememberMe" />
                Remember me
            </label>
        </div>
        <button type="submit">Sign In</button>
        <a href="/forgot-password">Forgot your password?</a>
    </form>
);
