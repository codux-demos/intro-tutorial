import { generatePath } from '@remix-run/react';

const HOME = '/';
const LESSON_01 = '/01-lets-start';
const LESSON_02 = '/02-elements-panel';
const LESSON_03 = '/03-add-elements';
const LESSON_04 = '/04-computed-styles';
const LESSON_05 = '/05-styles-panel';
const LESSON_06 = '/06-create-class';
const LESSON_07 = '/07-components';
const LESSON_08 = '/08-flex-layout';
const LESSON_09 = '/09-grid-layout';
const LESSON_10 = '/10-work-with-git';

export const ROUTES = {
    home: { path: HOME, to: () => HOME },
    lesson01: { path: LESSON_01, to: () => LESSON_01 },
    lesson02: { path: LESSON_02, to: () => LESSON_02 },
    lesson03: { path: LESSON_03, to: () => LESSON_03 },
    lesson04: { path: LESSON_04, to: () => LESSON_04 },
    lesson05: { path: LESSON_05, to: () => LESSON_05 },
    lesson06: { path: LESSON_06, to: () => LESSON_06 },
    lesson07: { path: LESSON_07, to: () => LESSON_07 },
    lesson08: { path: LESSON_08, to: () => LESSON_08 },
    lesson09: { path: LESSON_09, to: () => LESSON_09 },
    lesson10: { path: LESSON_10, to: () => LESSON_10 },
};

export type ROUTE_KEYS = keyof typeof ROUTES;
