import { createBoard } from '@wixc3/react-board';
import styles from './composition.board.module.scss';
import { CompositionTask } from '~/components/composition-task/composition-task';
import { LoginFormState } from '~/components/login-form-state/login-form-state';

export default createBoard({
    name: 'Composition',
    Board: () => {
        return (
            <div className={styles.container}>
                <CompositionTask className={styles.card} />
                <LoginFormState state="login" className={styles.card} />
                <LoginFormState
                    state="login"
                    errorInUsername="Wrong username"
                    errorInPassword="Wrong password"
                    className={styles.card}
                />
                <LoginFormState state="loading" className={styles.card} />
                <LoginFormState state="forgot-password" className={styles.card} />
            </div>
        );
    },
    environmentProps: {
        windowHeight: 600,
        windowWidth: 1915,
    },
});
