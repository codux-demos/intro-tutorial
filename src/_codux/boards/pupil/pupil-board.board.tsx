import { createBoard } from '@wixc3/react-board';
import { Pupil } from '../../../components/lessons/pupil/pupil';

export default createBoard({
    name: 'Pupil Board',
    Board: () => <Pupil />,
    isSnippet: true,
});