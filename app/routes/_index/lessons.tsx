import style from '~/globals/variables.module.scss';
import lesson01CoverImage from '../../../src/assets/lesson-01-cover.png';
import lesson02CoverImage from '../../../src/assets/lesson-02-cover.png';
import lesson03CoverImage from '../../../src/assets/lesson-03-cover.png';
import lesson04CoverImage from '../../../src/assets/lesson-04-cover.png';
import lesson05CoverImage from '../../../src/assets/lesson-05-cover.png';
import lesson06CoverImage from '../../../src/assets/lesson-06-cover.png';
import lesson07CoverImage from '../../../src/assets/lesson-07-cover.png';
import lesson08CoverImage from '../../../src/assets/lesson-08-cover.png';
import lesson09CoverImage from '../../../src/assets/lesson-09-cover.png';
import lesson10CoverImage from '../../../src/assets/lesson-10-cover.png';
import lesson11CoverImage from '../../../src/assets/lesson-11-cover.png';
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
        lessonCoverImage: lesson01CoverImage,
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
        lessonCoverImage: lesson02CoverImage,
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
        lessonCoverImage: lesson03CoverImage,
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
        lessonCoverImage: lesson04CoverImage,
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
        lessonCoverImage: lesson05CoverImage,
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
        lessonCoverImage: lesson06CoverImage,
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
        lessonCoverImage: lesson07CoverImage,
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
        lessonCoverImage: lesson08CoverImage,
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
        lessonCoverImage: lesson09CoverImage,
        footerTextColor: style.charcoalBlack,
    },
    {
        lessonNumber: '10',
        header: 'Working with Git',
        title: (
            <>
                Working with <br /> Git
            </>
        ),
        backgroundColor: style.orangeRed,
        url: '10-work-with-git',
        lessonCoverImage: lesson10CoverImage,
        footerTextColor: style.charcoalBlack,
    },
    {
        lessonNumber: '11',
        header: 'Adding Pages',
        title: (
            <>
                Adding <br /> Pages
            </>
        ),
        backgroundColor: style.darkGreen,
        lessonCoverImage: lesson11CoverImage,
        lessonContent: PagesOverlay,
        footerTextColor: style.charcoalBlack,
    },
];
