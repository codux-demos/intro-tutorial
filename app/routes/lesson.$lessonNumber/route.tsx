import {
    Lesson01,
    Lesson02,
    Lesson03,
    Lesson04,
    Lesson05,
    Lesson06,
    Lesson07,
    Lesson08,
    Lesson09,
    Lesson10,
    DefaultPage,
} from '~/components/lessons';
import type { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

const lessons: { [key: number]: React.ComponentType } = {
    1: Lesson01,
    2: Lesson02,
    3: Lesson03,
    4: Lesson04,
    5: Lesson05,
    6: Lesson06,
    7: Lesson07,
    8: Lesson08,
    9: Lesson09,
    10: Lesson10,
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
    const lessonNumber = params.lessonNumber;
    if (!lessonNumber) {
        throw new Error('Missing product slug');
    }

    return { lessonNumber };
};

export default function Lesson() {
    const { lessonNumber } = useLoaderData<typeof loader>();
    const lessonIndex = parseInt(lessonNumber || '', 10);
    const LessonComponent = lessons[lessonIndex] || DefaultPage;

    return <LessonComponent />;
}
