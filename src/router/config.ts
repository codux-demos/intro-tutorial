import { generatePath } from '@remix-run/react';

const HOME = '/';
const LESSON = '/lesson/:lessonNumber';

export const ROUTES = {
    home: { path: HOME, to: () => HOME },
    products: {
        path: LESSON,
        to: (lessonNumber: string) => generatePath(LESSON, { lessonNumber }),
    },
};

export type ROUTE_KEYS = keyof typeof ROUTES;
