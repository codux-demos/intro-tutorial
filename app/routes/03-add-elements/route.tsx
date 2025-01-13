import { useEffect, useState } from 'react';
import { ConfettiFx } from '~/components/fx/confetti-fx/confetti-fx';
import { Task03 as Task } from '~/components/tasks/task-03';
import styles from './lesson-03.module.scss';
import { LessonsFooter } from '~/components/lessons-footer/lessons-footer';
import { LESSON_02, LESSON_04 } from '~/router/config';
import { Pupil } from '~/components/pupil/pupil';
import { Pupil as Pupil0 } from '../../../src/components/pupil/pupil';

export default function Lesson03() {
    const [lessonSolved, setLessonSolved] = useState(false);

    useEffect(() => {
        setLessonSolved(isSolved());
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.root}>
                <div className={styles.lesson}>
                    <Task />
                    <div className={styles.playground}>
                        <div id="top" className={`${styles.eye} ${styles.top}`}>
                            <Pupil0 />
                        </div>
                        <div id="bottom" className={`${styles.eye} ${styles.bottom}`}>
                            <Pupil color={'hotRed'} />
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
            <LessonsFooter previousUrl={LESSON_02} nextUrl={LESSON_04} />
        </div>
    );
}

function isSolved(): boolean {
    return isPupil('top') && isPupil('bottom');
}

function isPupil(id: string): boolean {
    const elem = document.getElementById(id);
    return elem?.firstElementChild !== null
        ? !!elem?.firstElementChild.getAttribute('data-pupil')
        : false;
}
