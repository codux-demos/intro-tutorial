import { useCallback, useState } from 'react';
import img1 from '~/assets/img-1.png';
import img2 from '~/assets/img-2.png';
import img3 from '~/assets/img-3.png';
import img4 from '~/assets/img-4.png';
import img5 from '~/assets/img-5.png';
import img6 from '~/assets/img-6.png';
import { Image } from '~/components/common/image/image';
import { ConfettiFx } from '~/components/fx/confetti-fx/confetti-fx';
import { useRequestAnimationFrame } from '~/components/hooks';
import { Task04 as Task } from '~/components/tasks/task-04';
import styles from './lesson-04.module.scss';
import { LessonsFooter } from '~/components/lessons-footer/lessons-footer';
import { LESSON_03, LESSON_05 } from '~/router/config';

export default function Lesson04() {
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
                        <div className={styles.column}>
                            <div className={styles.images}>
                                <Image src={img1} className={styles.left} />
                                <Image src={img3} className={styles.left} />
                                <Image src={img5} className={styles.left} />
                            </div>
                        </div>
                        <div className={styles.column}>
                            <div className={styles.images}>
                                <Image src={img2} className={styles.right} />
                                <Image src={img4} className={styles.right} />
                                <Image src={img6} className={styles.right} />
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
            <LessonsFooter previousUrl={LESSON_03} nextUrl={LESSON_05} />
        </div>
    );
}

function isSolved(): boolean {
    let solved = true;
    const images = document.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
        solved = solved && images[i]!.clientWidth === 160 && images[i]!.clientHeight === 160;
    }
    return solved;
}
