import { useCallback, useState } from 'react';
import { Box } from '~/components/common/box/box';
import { ConfettiFx } from '~/components/fx/confetti-fx/confetti-fx';
import { useRequestAnimationFrame } from '~/components/hooks';
import { Task05 as Task } from '~/components/tasks/task-05';
import styles from './lesson-05.module.scss';
import { LessonsFooter } from '~/components/lessons-footer/lessons-footer';
import { LESSON_04, LESSON_06 } from '~/router/config';

export default function Lesson05() {
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
                        <div className={styles.section}>
                            <div className={styles.row}>
                                <Box
                                    text="N"
                                    color={'lavender'}
                                    className={styles.margin}
                                    id="margin"
                                />
                                <Box text="I" color={'lavender'} className={styles.margin} />
                                <Box text="C" color={'lavender'} className={styles.margin} />
                                <Box text="E" color={'lavender'} className={styles.margin} />
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
                        <ConfettiFx
                            maxParticles={400}
                            dissolve={315}
                            show={lessonSolved}
                            style={{ display: lessonSolved ? 'block' : 'none' }}
                        />
                    </div>
                </div>
            </div>
            <LessonsFooter previousUrl={LESSON_04} nextUrl={LESSON_06} />
        </div>
    );
}

function isSolved(): boolean {
    const margin = getNumValue(getComputed('margin').getPropertyValue('margin'));
    const padding = getNumValue(getComputed('padding').getPropertyValue('padding'));
    return margin <= 6 && margin >= 0 && padding <= 20 && padding >= 10;
}

function getComputed(id: string) {
    return getComputedStyle(document.getElementById(id)!);
}

function getNumValue(cssValue: string): number {
    return Number(cssValue.replace(/px$/, ''));
}
