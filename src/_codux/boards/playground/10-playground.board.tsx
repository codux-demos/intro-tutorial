import { createBoard } from '@wixc3/react-board';
import styles from './playground.module.scss';
import { Card } from '../../../components/card/card';

export default createBoard({
    name: '10 Playground',
    Board: () => (
        <div className={styles.root}>
            <div className={styles.header}>Title: description of this board</div>
            <div className={styles.gallery}>
                <Card description="product description" price="$100" title="Product Title" />
                <Card description="product description" price="$100" title="Product Title" />
                <Card description="product description" price="$100" title="Product Title" />
                <Card description="product description" price="$100" title="Product Title" />
                <Card description="product description" price="$100" title="Product Title" />
                <Card description="product description" price="$100" title="Product Title" />
            </div>
            <div className={styles.footer}>This is the footer</div>
        </div>
    ),
    isSnippet: false,
    environmentProps: {
        windowWidth: 1024,
    },
});
