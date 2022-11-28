import type React from 'react';
import styles from './lesson-05.module.scss';
import { Box } from '../../common/box/box';
import { Task05 as Task } from '../../tasks/05/task-05';

export const Lesson05: React.FC = () => {
    return (
        <div className={styles.root}>
            <Task />
            <div className={styles.playground}>
                <div className={styles.section}>
                    <div className={styles.row}>
                        <Box
                            text="N"
                            color={'lavender'}
                            className={styles.margin}
                            id="margin"
                        />
                        <Box
                            text="I"
                            color={'lavender'}
                            className={styles.margin}
                        />
                        <Box
                            text="C"
                            color={'lavender'}
                            className={styles.margin}
                        />
                        <Box
                            text="E"
                            color={'lavender'}
                            className={styles.margin}
                        />
                    </div>
                </div>
                <div className={styles.section}>
                    <div className={styles.row}>
                        <Box
                            text="Give me some space"
                            color={'turquoiseGreen'}
                            className={styles.padding}
                            id="padding"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
