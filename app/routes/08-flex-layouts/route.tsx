import { useCallback, useState } from 'react';
import { Box } from '~/components/common/box/box';
import { ConfettiFx } from '~/components/fx/confetti-fx/confetti-fx';
import { useRequestAnimationFrame } from '~/components/hooks';
import { Task08 as Task } from '~/components/tasks/task-08';
import styles from './lesson-08.module.scss';
import { LessonsFooter } from '~/components/lessons-footer/lessons-footer';
import { LESSON_07, LESSON_09 } from '~/router/config';

export default function Lesson08() {
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
                        <div className={`${styles.section} ${styles.circles}`} id="circles">
                            <Box color="darkLavender" className={styles.circle} />
                            <Box color="hotPink" className={styles.circle} />
                            <Box color="babyPink" className={styles.circle} />
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
                                color="babyPink"
                                className={styles.tag}
                            />
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
            <LessonsFooter previousUrl={LESSON_07} nextUrl={LESSON_09} />
        </div>
    );
}

function isSolved(): boolean {
    const elem = getComputed('circles');
    const isflex = elem.getPropertyValue('display') === 'flex';
    const isSolvedDirection = elem.getPropertyValue('flex-direction') === 'column';
    const isSolvedJustify =
        elem.getPropertyValue('justify-content') === 'flex-end' ||
        elem.getPropertyValue('justify-content') === 'end';
    const isSolvedGap = getNumValue(elem.getPropertyValue('gap')) === 26;
    return isflex && isSolvedDirection && isSolvedJustify && isSolvedGap;
}

function getComputed(id: string) {
    return getComputedStyle(document.getElementById(id)!);
}

function getNumValue(cssValue: string): number {
    return Number(cssValue.replace(/px$/, ''));
}
