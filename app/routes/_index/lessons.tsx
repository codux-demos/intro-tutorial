import style from '~/globals/variables.module.scss';
import { PagesOverlay } from './pages-overlay';

interface Lesson {
    lessonNumber: string;
    title: JSX.Element;
    backgroundColor: string;
    lessonCoverImage: string;
    url?: string;
    lessonContent?: React.ComponentType;
    footerTextColor: string;
}

export const LESSONS: Lesson[] = [
    {
        lessonNumber: '01',
        title: (
            <>
                Let's Get <br /> Started
            </>
        ),
        backgroundColor: style.babyPink,
        url: '01-lets-start',
        lessonCoverImage: 'url(../../../src/assets/lesson-01-cover.svg)',
        footerTextColor: style.charcoalBlack,
    },
    {
        lessonNumber: '02',
        title: (
            <>
                Elements <br /> Panel
            </>
        ),
        backgroundColor: style.goldYellow,
        url: '02-elements-panel',
        lessonCoverImage: 'url(../../../src/assets/lesson-02-cover.svg)',
        footerTextColor: style.white,
    },
    {
        lessonNumber: '03',
        title: (
            <>
                Add <br /> Elements
            </>
        ),
        backgroundColor: style.aeroBlue,
        url: '03-add-elements',
        lessonCoverImage: 'url(../../../src/assets/lesson-03-cover.svg)',
        footerTextColor: style.white,
    },
    {
        lessonNumber: '04',
        title: (
            <>
                Computed <br /> Styles
            </>
        ),
        backgroundColor: style.lavender,
        url: '04-computed-styles',
        lessonCoverImage: 'url(../../../src/assets/lesson-04-cover.jpg)',
        footerTextColor: style.white,
    },
    {
        lessonNumber: '05',
        title: (
            <>
                Styles <br /> Panel
            </>
        ),
        backgroundColor: style.pastelPink,
        url: '05-styles-panel',
        lessonCoverImage: 'url(../../../src/assets/lesson-05-cover.svg)',
        footerTextColor: style.white,
    },
    {
        lessonNumber: '06',
        title: (
            <>
                Creating <br /> Class
            </>
        ),
        backgroundColor: style.turquoiseGreen,
        url: '06-create-class',
        lessonCoverImage: 'url(../../../src/assets/lesson-06-cover.svg)',
        footerTextColor: style.white,
    },
    {
        lessonNumber: '07',
        title: (
            <>
                Components & <br /> Properties
            </>
        ),
        backgroundColor: style.darkLavender80,
        url: '07-components',
        lessonCoverImage: 'url(../../../src/assets/lesson-07-cover.svg)',
        footerTextColor: style.white,
    },
    {
        lessonNumber: '08',
        title: (
            <>
                Flex <br /> Layouts
            </>
        ),
        backgroundColor: style.oliveGreen,
        url: '08-flex-layouts',
        lessonCoverImage: 'url(../../../src/assets/lesson-08-cover.svg)',
        footerTextColor: style.white,
    },
    {
        lessonNumber: '09',
        title: (
            <>
                Grid <br /> Layouts
            </>
        ),
        backgroundColor: style.dirtyWhite,
        url: '09-grid-layouts',
        lessonCoverImage: 'url(../../../src/assets/lesson-09-cover.svg)',
        footerTextColor: style.charcoalBlack,
    },
    {
        lessonNumber: '10',
        title: (
            <>
                Working with <br /> Git
            </>
        ),
        backgroundColor: style.orangeRed,
        url: '10-work-with-git',
        lessonCoverImage: 'url(../../../src/assets/lesson-10-cover.svg)',
        footerTextColor: style.charcoalBlack,
    },
    {
        lessonNumber: '11',
        title: (
            <>
                Adding <br /> Pages
            </>
        ),
        backgroundColor: style.darkGreen,
        lessonCoverImage: 'url(../../../src/assets/lesson-11-cover.svg)',
        lessonContent: PagesOverlay,
        footerTextColor: style.charcoalBlack,
    },
];
