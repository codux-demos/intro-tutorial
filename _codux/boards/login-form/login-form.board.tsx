import { createBoard } from '@wixc3/react-board';
import { LoginForm } from '../../../src/components/login-form/login-form';

export default createBoard({
    name: 'LoginForm',
    Board: () => <LoginForm />,
    environmentProps: {
        windowWidth: 340,
        windowHeight: 450,
    },
});
