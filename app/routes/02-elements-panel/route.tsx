import { useEffect, useState } from 'react';
import { Box } from '~/components/common/box/box';
import { ConfettiFx } from '~/components/fx/confetti-fx/confetti-fx';
import { Task02 as Task } from '~/components/tasks/task-02';
import styles from './lesson-02.module.scss';
import { LessonsFooter } from '~/components/lessons-footer/lessons-footer';
import { LESSON_01, LESSON_03 } from '~/router/config';

export default function Lesson02() {
    const [lessonSolved, setLessonSolved] = useState(false);

    useEffect(() => {
        setLessonSolved(isSolved());
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.root}>
                <div className={styles.lesson}>
                    <Task />
                    <div className={styles.playground} id="playground">
                        <div className={styles.row}>
                            <Box text={'1'} className={styles.box01} color={'hotPink'} />
                            <Box text={'2'} className={styles.box02} color={'turquoiseGreen'} />
                        </div>
                        <div className={styles.row}>
                            <Box text={'5'} className={styles.box05} color={'dirtyWhite'} />
                        </div>
                        <div className={styles.row}>
                            <Box text={'6'} className={styles.box06} color={'richGreen'} />
                            <Box text={'7'} className={styles.box07} color={'orangeRed'} />
                            <Box text={'8'} className={styles.box08} color={'hotRed'} />
                        </div>
                        <div className={styles.row}>
                            <Box text={'3'} className={styles.box03} color={'goldYellow'} />
                            <Box text={'4'} className={styles.box04} color={'darkLavender'} />
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
            <LessonsFooter previousUrl={LESSON_01} nextUrl={LESSON_03} />
        </div>
    );
}

function isSolved(): boolean {
    const onStageRowsOrder = document.getElementById('playground')?.innerText.replace(/\n/gm, '');
    return onStageRowsOrder === '12345678';
}
