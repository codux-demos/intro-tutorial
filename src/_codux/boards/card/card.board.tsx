import { createBoard } from '@wixc3/react-board';
import { Card } from '../../../components/card/card';

export default createBoard({
    name: 'Card',
    Board: () => (
        <Card
            callToAction="Add To Cart"
            title="Product Title"
            price="$ 2,987"
            description="Product description"
        />
    ),
    isSnippet: true,
});
