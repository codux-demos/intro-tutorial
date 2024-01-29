import { createBoard } from '@wixc3/react-board';
import { Hint } from '../../../components/hint/hint';
import hint from '../../../assets/hints/hint_01.svg';

export default createBoard({
    name: 'Hint',
    Board: () => <Hint svg={hint} text={'text'}/>,
    isSnippet: true,
});
