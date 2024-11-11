import { createBoard } from '@wixc3/react-board';
import { RainbowLoader } from '../../../src/components/rainbow-loader/rainbow-loader';

export default createBoard({
    name: 'RainbowLoader',
    Board: () => <RainbowLoader />,
    environmentProps: {
        windowWidth: 340,
        windowHeight: 450,
    },
});
