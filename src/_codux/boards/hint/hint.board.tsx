import { createBoard } from '@wixc3/react-board';
import { Hint } from '../../../components/hint/hint';
import hint from '../../../assets/hints/hint_01.svg';

export default createBoard({
    name: 'Hint',
    Board: () => <Hint svg={hint} text={'This is a card component-\n a reusable piece of UI that lets you\n change properties & styles.'}/>,
    isSnippet: true,
});
