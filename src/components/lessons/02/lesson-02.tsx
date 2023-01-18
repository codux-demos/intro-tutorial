import type React from 'react';
import styles from './lesson-02.module.scss';
import { Box } from '../../common/box/box';
import { Task02 as Task } from '../../tasks/02/task-02';

export const Lesson02: React.FC = () => {
    return (
        <div className={styles.root}>
            <Task />
            <div className={styles.playground} id="playground">
                <div className={styles.row}>
                    <Box
                        text={'1'}
                        className={styles.box01}
                        color={'hotPink'}
                    />
                    <Box
                        text={'2'}
                        className={styles.box02}
                        color={'turquoiseGreen'}
                    />
                </div>
                <div className={styles.row}>
                    <Box
                        text={'3'}
                        className={styles.box03}
                        color={'goldYellow'}
                    />
                    <Box
                        text={'4'}
                        className={styles.box04}
                        color={'darkLavender'}
                    />
                </div>
                <div className={styles.row}>
                    <Box
                        text={'5'}
                        className={styles.box05}
                        color={'dirtyWhite'}
                    />
                </div>
                <div className={styles.row}>
                    <Box
                        text={'6'}
                        className={styles.box06}
                        color={'richGreen'}
                    />
                    <Box
                        text={'7'}
                        className={styles.box07}
                        color={'orangeRed'}
                    />
                    <Box text={'8'} className={styles.box08} color={'hotRed'} />
                </div>
            </div>
        </div>
    );
};

function isSolved(): boolean {
    const onStageRowsOrder = document
        .getElementById('playground')
        ?.innerText.replace(/\n/gm, '');
    return onStageRowsOrder === '12345678';
}
