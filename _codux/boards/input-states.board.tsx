import { createBoard } from '@wixc3/react-board';
import { FloatingInput } from '../../src/components/login-form/floating-input';
import styles from './input-states.board.module.scss';

export default createBoard({
    name: 'Input States',
    Board: () => (
        <div className={styles.container}>
            <FloatingInput label="Username" />
            <FloatingInput label="Password" error />
        </div>
    ),
    environmentProps: {
        windowWidth: 500,
        windowHeight: 300,
    },
});
