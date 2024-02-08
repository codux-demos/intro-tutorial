import { createBoard } from '@wixc3/react-board';
import { Playground10 } from '../../../components/lessons/playground-10/playground-10';

export default createBoard({
    name: '10 Playground',
    Board: () => <Playground10 />,
    isSnippet: false,
    environmentProps: {
        windowWidth: 1024,
        canvasMargin: {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
        },
        windowHeight: 768,
    },
});
