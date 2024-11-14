import style from '~/globals/variables.module.scss';
import { PagesOverlay } from './pages-overlay';

interface Lesson {
    lessonNumber: string;
    header: string;
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
        header: "Let's Get Started",
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
        header: 'Elements Panel',
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
        header: 'Add Elements',
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
        header: 'Computed Styles',
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
        header: 'Styles Panel',
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
        header: 'Creating Class',
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
        header: 'Components & Properties',
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
        header: 'Flex Layouts',
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
        header: 'Grid Layouts',
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
        header: 'Adding Pages',
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
