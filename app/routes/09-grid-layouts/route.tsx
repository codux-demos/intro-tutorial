import { useCallback, useState } from 'react';
import type { ColorName } from '~/globals/colors';
import { Box } from '~/components/common/box/box';
import { ConfettiFx } from '~/components/fx/confetti-fx/confetti-fx';
import { useRequestAnimationFrame } from '~/components/hooks';
import { Task09 as Task } from '~/components/tasks/task-09';
import styles from './lesson-09.module.scss';
import { LessonsFooter } from '~/components/lessons-footer/lessons-footer';
import { LESSON_08, LESSON_10 } from '~/router/config';

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

export default function Lesson09() {
    const [lessonSolved, setLessonSolved] = useState(false);

    const checkSolution = useCallback(() => {
        setLessonSolved(isSolved());
    }, []);

    useRequestAnimationFrame(checkSolution);

    return (
        <div className={styles.container}>
            <div className={styles.root}>
                <div className={styles.lesson}>
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
                        <ConfettiFx
                            maxParticles={400}
                            dissolve={315}
                            show={lessonSolved}
                            style={{ display: lessonSolved ? 'block' : 'none' }}
                        />
                    </div>
                </div>
            </div>
            <LessonsFooter previousUrl={LESSON_08} nextUrl={LESSON_10} />
        </div>
    );
}

function isSolved(): boolean {
    const pos = '445445';
    const grid = getComputed('grid');
    const isGrid = grid.getPropertyValue('display') === 'grid';
    const gridCols = grid.getPropertyValue('grid-template-columns').split(' ').length;
    const gridRows = grid.getPropertyValue('grid-template-rows').split(' ').length;

    const glow = getComputed('glow');
    const glowColPos =
        glow.getPropertyValue('grid-column-start') + glow.getPropertyValue('grid-column-end');
    const glowRowPos =
        glow.getPropertyValue('grid-row-start') + glow.getPropertyValue('grid-row-end');

    return (
        isGrid &&
        gridCols == 11 &&
        gridRows == 10 &&
        pos.indexOf(glowColPos) > -1 &&
        pos.indexOf(glowRowPos) > -1
    );
}

function getComputed(elem: string) {
    return getComputedStyle(document.getElementById(elem)!);
}
