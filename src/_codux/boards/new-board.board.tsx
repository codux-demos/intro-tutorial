import { createBoard } from '@wixc3/react-board';
import Lesson10 from '~/page/10-work-with-git/route';

export default createBoard({
    name: 'New Board',
    Board: () => <Lesson10 />,
});
