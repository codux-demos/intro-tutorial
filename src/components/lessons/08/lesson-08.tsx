import { Box } from '../../common/box/box';
import { Task08 as Task } from '../../tasks/08/task-08';
import styles from './lesson-08.module.scss';

export const Lesson08 = () => {
    return (
        <div className={styles.root}>
            <Task />
            <div className={styles.playground}>
                <div className={`${styles.section} ${styles.circles}`} id="circles">
                    <Box color="darkLavender" className={styles.circle} />
                    <Box color="hotPink" className={styles.circle} />
                    <Box color="danaPink" className={styles.circle} />
                </div>
                <div className={`${styles.section} ${styles.tags}`}>
                    <Box
                        align="left"
                        iconColor="charcoalBlack"
                        icon="circle"
                        color="darkLavender"
                        className={styles.tag}
                    />
                    <Box
                        align="left"
                        iconColor="charcoalBlack"
                        icon="circle"
                        color="hotPink"
                        className={styles.tag}
                    />
                    <Box
                        align="left"
                        iconColor="charcoalBlack"
                        icon="circle"
                        color="danaPink"
                        className={styles.tag}
                    />
                </div>
            </div>
        </div>
    );
};
