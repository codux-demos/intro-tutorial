import { createBoard } from '@wixc3/react-board';
import styles from './composition.board.module.scss';
import { CompositionTask } from '~/components/composition-task/composition-task';
import { LoginForm } from '~/components/login-form/login-form';

export default createBoard({
    name: 'Login Form States',
    Board: () => {
        return (
            <div className={styles.container}>
                <CompositionTask className={styles.card} />
                <LoginForm className={styles.card} />
                <LoginForm
                    errorInUsername="Wrong username"
                    errorInPassword="Wrong password"
                    className={styles.card}
                />
                <LoginForm isLoading className={styles.card} />
                <LoginForm showForgotPasswordView className={styles.card} />
            </div>
        );
    },
    environmentProps: {
        windowHeight: 600,
        windowWidth: 1915,
    },
});
