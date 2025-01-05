import { useState } from 'react';
import { Box } from '~/components/common/box/box';
import { ConfettiFx } from '~/components/fx/confetti-fx/confetti-fx';
import { CursorFx } from '~/components/fx/cursor-fx/cursor-fx';
import { Task01 as Task } from '~/components/tasks/task-01';
import styles from './lesson-01.module.scss';
import { LessonsFooter } from '~/components/lessons-footer/lessons-footer';
import { LESSON_02 } from '~/router/config';
import { boxes } from 'app/constants';

export default function Lesson01() {
    // on mouse enter fade-out box
    const [visible, setVisible] = useState<boolean[]>(
        boxes.map(() => {
            return true;
        })
    );

    return (
        <div className={styles.container}>
            <div className={styles.root}>
                <div className={styles.lesson}>
                    <Task />
                    <div className={styles.playground}>
                        {boxes.map((color, idx) => (
                            <Box
                                key={idx}
                                color={color}
                                className={`${styles.boxes} ${visible[idx] || styles.fadeOut}`}
                                onMouseEnter={() => {
                                    const boxesVisibility = [...visible];
                                    boxesVisibility[idx] = false;
                                    setVisible(boxesVisibility);
                                }}
                            />
                        ))}
                        <CursorFx />
                        <ConfettiFx
                            maxParticles={400}
                            dissolve={315}
                            show={visible.every((value) => value === false)}
                        />
                    </div>
                </div>
            </div>
            <LessonsFooter nextUrl={LESSON_02} />
        </div>
    );
}
