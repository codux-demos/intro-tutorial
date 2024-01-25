import { createBoard } from '@wixc3/react-board';
import styles from './playground.module.scss';
import { Card } from '../../../components/card/card';
import {Poster_01, Poster_02, Poster_03, Poster_04, Poster_05, Poster_06} from '../../../assets/posters';


export default createBoard({
    name: '10 Playground',
    Board: () => (
        <div className={styles.root}>
            <div className={styles.header}>Title: description of this board</div>
            <div className={styles.gallery}>
                <Card
                    description="product description"
                    price="$100"
                    title="Product Title"
                    className={styles.poster}
                    imgSrc={Poster_01}
                />
                <Card
                    description="product description"
                    price="$100"
                    title="Product Title"
                    className={styles.poster}
                    imgSrc={Poster_02}
                />
                <Card
                    description="product description"
                    price="$100"
                    title="Product Title"
                    className={styles.poster}
                    imgSrc={Poster_03}
                />
                <Card
                    description="product description"
                    price="$100"
                    title="Product Title"
                    className={styles.poster}
                    imgSrc={Poster_04}
                />
                <Card
                    description="product description"
                    price="$100"
                    title="Product Title"
                    className={styles.poster}
                    imgSrc={Poster_05}
                />
                <Card
                    description="product description"
                    price="$100"
                    title="Product Title"
                    className={styles.poster}
                    imgSrc={Poster_06}
                />
            </div>
            <div className={styles.footer}>This is the footer</div>
        </div>
    ),
    isSnippet: false,
    environmentProps: {
        windowWidth: 1146,
        windowHeight: 780,
        canvasMargin: {
            top: 0, right: 0, bottom: 0, left: 0
        }
    },
});
