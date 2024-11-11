import { createBoard } from '@wixc3/react-board';
import { LoginForm } from '../../../src/components/login-form/login-form';
import styles from './login-form.board.module.scss';
import { RainbowLoader } from '~/components/rainbow-loader/rainbow-loader';
import { ForgotPasswordDialogView } from '~/components/forgot-password-dialog/forgot-password-dialog-view';

export default createBoard({
    name: 'LoginForm',
    Board: () => {
        return (
            <div className={styles.container}>
                <LoginForm className={styles.card} />
                <LoginForm
                    errorInUsername="Wrong username"
                    errorInPassword="Wrong password"
                    className={styles.card}
                />
                <RainbowLoader className={styles.card} />
                <ForgotPasswordDialogView className={styles.card} />
            </div>
        );
    },
});
