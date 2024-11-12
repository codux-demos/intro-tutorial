import React from 'react';
import { LoginForm, LoginFormProps } from '../login-form/login-form';
import {
    ForgotPasswordDialogView,
    ForgotPasswordDialogViewProps,
} from '../forgot-password-dialog/forgot-password-dialog-view';
import { RainbowLoader, RainbowLoaderProps } from '../rainbow-loader/rainbow-loader';

export interface LoginFormStateProps
    extends LoginFormProps,
        ForgotPasswordDialogViewProps,
        RainbowLoaderProps {
    state?: 'login' | 'loading' | 'forgot-password';
}

export const LoginFormState: React.FC<LoginFormStateProps> = ({ state = 'login', ...props }) => {
    switch (state) {
        case 'login':
            return <LoginForm {...props} />;
        case 'loading':
            return <RainbowLoader {...props} />;
        case 'forgot-password':
            return <ForgotPasswordDialogView {...props} />;
    }
};
