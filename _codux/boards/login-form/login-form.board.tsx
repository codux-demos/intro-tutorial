import { createBoard } from '@wixc3/react-board';
import { LoginForm } from '../../../src/components/login-form/login-form';
import styles from './login-form.board.module.scss';

export default createBoard({
    name: 'LoginForm',
    Board: () => {
        return (
            <div className={styles.container}>
                <LoginForm />
                <LoginForm errorInUsername errorInPassword />
            </div>
        );
    },
    environmentProps: {
        windowHeight: 450,
        windowWidth: 768,
    },
});
