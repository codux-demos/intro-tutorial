import { useState } from 'react';
import type { ColorName } from '~/globals/colors';
import { Box } from '~/components/common/box/box';
import { ConfettiFx } from '~/components/fx/confetti-fx/confetti-fx';
import { CursorFx } from '~/components/fx/cursor-fx/cursor-fx';
import { Task01 as Task } from '~/components/tasks/01/task-01';
import styles from './lesson-01.module.scss';
import { LessonsFooter } from '~/components/lessons-footer/lessones-footer';
import { LESSON_02 } from '~/router/config';

const boxes: ColorName[] = [
    'lavender',
    'turquoiseGreen',
    'dirtyWhite',
    'aeroBlue',
    'hotRed',
    'hotPink',
    'goldYellow',
    'orangeRed',
    'aeroBlue',
    'richGreen',
    'darkLavender',
    'oliveGreen',
    'orangeRed',
    'pastelPink',
    'dirtyWhite',
    'richGreen',
    'oliveGreen',
    'orangeRed',
    'turquoiseGreen',
    'aeroBlue',
    'darkLavender',
    'hotRed',
    'hotPink',
];

export default function Lesson01() {
    // on mouse enter fade-out box
    const [visible, setVisible] = useState<boolean[]>(
        boxes.map(() => {
            return true;
        })
    );

    return (
        <div>
            <div className={styles.root}>
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
            <LessonsFooter nextUrl={LESSON_02} />
        </div>
    );
}
