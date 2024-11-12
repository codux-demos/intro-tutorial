import { createBoard } from '@wixc3/react-board';
import { ForgotPasswordDialogView } from '../../../src/components/forgot-password-dialog/forgot-password-dialog-view';

export default createBoard({
    name: 'ForgotPasswordDialog',
    Board: () => <ForgotPasswordDialogView />,
    environmentProps: {
        windowWidth: 340,
        windowHeight: 435,
    },
});
