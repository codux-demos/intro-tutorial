import type { ColorName } from '../../../globals/colors';
import { Box } from '../../common/box/box';
import { Task09 as Task } from '../../tasks/09/task-09';
import styles from './lesson-09.module.scss';

const boxes: ColorName[] = [
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
    'charcoalBlack',
    'charcoalBlack',
    'charcoalBlack',
    'turquoiseGreen',
    'charcoalBlack',
    'charcoalBlack',
    'charcoalBlack',
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
    'charcoalBlack',
    'pastelPink',
    'pastelPink',
    'pastelPink',
    'charcoalBlack',
    'pastelPink',
    'pastelPink',
    'pastelPink',
    'charcoalBlack',
    'turquoiseGreen',
    'turquoiseGreen',
    'charcoalBlack',
    'pastelPink',
    'snowWhite',
    'pastelPink',
    'pastelPink',
    'pastelPink',
    'pastelPink',
    'pastelPink',
    'charcoalBlack',
    'turquoiseGreen',
    'turquoiseGreen',
    'charcoalBlack',
    'pastelPink',
    'pastelPink',
    'pastelPink',
    'pastelPink',
    'pastelPink',
    'pastelPink',
    'pastelPink',
    'charcoalBlack',
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
    'charcoalBlack',
    'pastelPink',
    'pastelPink',
    'pastelPink',
    'pastelPink',
    'pastelPink',
    'charcoalBlack',
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
    'charcoalBlack',
    'pastelPink',
    'pastelPink',
    'pastelPink',
    'charcoalBlack',
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
    'charcoalBlack',
    'pastelPink',
    'charcoalBlack',
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
    'charcoalBlack',
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
    'turquoiseGreen',
];

export const Lesson09 = () => {
    return (
        <div className={styles.root}>
            <Task />
            <div className={styles.playground}>
                <div className={styles.grid} id="grid">
                    {boxes.map((color, idx) => (
                        <Box
                            key={idx}
                            color={color}
                            {...(color === 'snowWhite'
                                ? { className: styles.glow, id: 'glow' }
                                : '')}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
