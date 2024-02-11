import { createBoard } from '@wixc3/react-board';
import { Playground10 } from '../../../components/lessons/playground-10/playground-10';

export default createBoard({
    name: '10 Playground',
    Board: () => <Playground10 />,
    isSnippet: false,
    environmentProps: {
        windowWidth: 1392,
        windowHeight: 1024,
    },
});
