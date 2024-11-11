import { createBoard } from '@wixc3/react-board';
import { LoginForm } from '../../../src/components/login-form/login-form';
import styles from './login-form.board.module.scss';
import { RainbowLoader } from '~/components/rainbow-loader/rainbow-loader';

export default createBoard({
    name: 'LoginForm',
    Board: () => {
        return (
            <div className={styles.container}>
                <LoginForm className={styles.card} />
                <LoginForm errorInUsername errorInPassword className={styles.card} />
                <RainbowLoader className={styles.card} />
            </div>
        );
    },
});
