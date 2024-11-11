import { createBoard } from '@wixc3/react-board';
import { LoginForm } from '../../../src/components/login-form/login-form';
import styles from './composition.board.module.scss';
import { RainbowLoader } from '~/components/rainbow-loader/rainbow-loader';
import { ForgotPasswordDialogView } from '~/components/forgot-password-dialog/forgot-password-dialog-view';
import { CompositionTask } from '~/components/composition-task/composition-task';

export default createBoard({
    name: 'Composition',
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
                <RainbowLoader className={styles.card} />
                <ForgotPasswordDialogView className={styles.card} />
            </div>
        );
    },
    environmentProps: {
        windowHeight: 600,
        windowWidth: 1915,
    },
});
