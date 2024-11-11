import { createBoard } from '@wixc3/react-board';
import { ForgotPasswordDialog } from '../../../src/components/forgot-password-dialog/forgot-password-dialog';

export default createBoard({
    name: 'ForgotPasswordDialog',
    Board: () => <ForgotPasswordDialog open />,
    environmentProps: {
        windowWidth: 340,
        windowHeight: 450,
    },
});
