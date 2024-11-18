import { createBoard, Variant } from '@wixc3/react-board';
import { TaskTag } from '~/components/common/task-tag/task-tag';
import { Box } from '~/components/common/box/box';
import styles from './ui-kit.board.module.scss';
import taskStyles from '../../src/components/tasks/task.module.scss';
import { Pupil } from '../../src/components/pupil/pupil';
import { ConfettiFx } from '~/components/fx/confetti-fx/confetti-fx';
import { useEffect, useState } from 'react';
import { SocialIcon } from '~/components/social-icon/social-icon';
import { TaskSymbol } from '~/components/common/task-symbol/task-symbol';
import classNames from 'classnames';

export default createBoard({
    name: 'UI Kit',
    Board: () => {
        const [lessonSolved, setLessonSolved] = useState(false);

        useEffect(() => {
            const solved = isSolved();
            setLessonSolved(solved);

            if (solved) {
                setTimeout(() => {
                    setLessonSolved(false);
                }, 4000);
            }
        }, []);

        return (
            <div className={styles.root}>
                <div className={styles.task}>
                    <h1 className={styles.boardTitle}>UI Kit</h1>
                    <p>
                        <b>UI Kit Variants</b> help you keep design consistent. They can be re-used
                        across your project through the Add Elements panel, under the{' '}
                        <b>UI Kit section</b>.{' '}
                    </p>
                    <ol className={styles.taskList}>
                        <br />
                        <li>
                            Make <TaskTag type="tree" children="div.menuIcon" /> a part of the UI
                            Kit: Right click on it, select <b>‘Create Variant’</b> and give it a
                            name.
                        </li>
                        <br />
                        <li>
                            Open the <TaskSymbol name="add" />
                            Add Elements Panel and add the variant from the <b>UI Kit.</b>
                        </li>
                        <br />
                    </ol>
                    <div id="drop-area" className={styles.dropArea}></div>
                </div>
                <div className={styles.uiKits}>
                    <div className={classNames(styles.uiKitContent, styles.navSection)}>
                        <h2 className={styles.sectionTitle}>NAVIGATION</h2>
                        <section className={styles.uiKitSection}>
                            <div className={styles.sectionItem}>
                                <h3 className={styles.uiTitle}>Menu</h3>
                                <div data-menu className={taskStyles.menuIcon}>
                                    <div className={taskStyles.upperMenuIcon} />
                                    <div className={taskStyles.lowerMenuIcon} />
                                </div>
                            </div>
                            <div className={styles.sectionItem}>
                                <h3 className={styles.uiTitle}>Steps</h3>
                                <Variant name="Steps">
                                    <div className={taskStyles.progress}>
                                        <b>07</b> / 10
                                    </div>
                                </Variant>
                            </div>
                            <h3 className={styles.uiTitle}>Button</h3>
                            <Variant name="Start Button">
                                <button className={taskStyles.startLessonButton}>Start</button>
                            </Variant>
                        </section>
                    </div>
                    <div className={classNames(styles.typographySection, styles.uiKitContent)}>
                        <h2 className={styles.sectionTitle}>TYPOGRAPHY</h2>
                        <section className={styles.uiKitSection}>
                            <div className={styles.sectionItem}>
                                <h3 className={styles.uiTitle}>Title</h3>
                                <Variant name="Title">
                                    <h1 className={taskStyles.title}>Lesson Title</h1>
                                </Variant>
                            </div>
                            <div className={styles.sectionItem}>
                                <h3 className={styles.uiTitle}>Paragraph</h3>
                                <div className={styles.paragraphBox}>
                                    <Variant name="Paragraph">
                                        <p>
                                            This is an introductory text that explains the{' '}
                                            <b>purpose of each lesson</b>, and provides key steps on
                                            how to <b>solve it</b>.
                                        </p>
                                    </Variant>
                                </div>
                            </div>
                        </section>
                    </div>
                    <div className={classNames(styles.graphicsSection, styles.uiKitContent)}>
                        <h2 className={styles.sectionTitle}>GRAPHICS</h2>
                        <section className={styles.uiKitSection}>
                            <div className={styles.sectionItem}>
                                <h3 className={styles.uiTitle}>Elements</h3>
                                <Variant name="Pupil">
                                    <Pupil />
                                </Variant>
                            </div>
                            <div className={styles.sectionItem}>
                                <h3 className={styles.uiTitle}>Icons</h3>
                                <div className={styles.iconContainer}>
                                    <Variant name="Heart Outline Icon">
                                        <Box
                                            outlined={false}
                                            color="charcoalBlack"
                                            icon="heartOutline"
                                            iconColor="pastelPink"
                                            className={taskStyles.roundIcon}
                                        />
                                    </Variant>
                                    <Variant name="Heart Outline Icon">
                                        <Box
                                            outlined={false}
                                            color="charcoalBlack"
                                            icon="arrow"
                                            iconDirection="right"
                                            iconColor="white"
                                            className={taskStyles.roundIcon}
                                        />
                                    </Variant>
                                    <Variant name="Heart Outline Icon">
                                        <Box
                                            color="charcoalBlack"
                                            icon="heart"
                                            className={taskStyles.roundIcon}
                                            iconColor="pastelPink"
                                        />
                                    </Variant>
                                </div>
                            </div>
                            <div className={styles.sectionItem}>
                                <h3 className={styles.uiTitle}>Social</h3>
                                <div className={styles.socialContainer}>
                                    <Variant name="X Icon">
                                        <SocialIcon name="x" />
                                    </Variant>
                                    <Variant name="Discord Icon">
                                        <SocialIcon name="discord" />
                                    </Variant>

                                    <Variant name="YouTube Icon">
                                        <SocialIcon name="youtube" />
                                    </Variant>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
                {lessonSolved && <ConfettiFx maxParticles={200} show={lessonSolved} />}
            </div>
        );
    },
    environmentProps: {
        windowHeight: 596,
        windowWidth: 1211,
    },
    isSnippet: true,
});

function isSolved(): boolean {
    return !!document.getElementById('drop-area')?.firstElementChild?.getAttribute('data-menu');
}
