import defineRemixApp, { RouteExtraInfo } from '@wixc3/define-remix-app';
import { type IReactApp } from '@wixc3/app-core';

const app = defineRemixApp({
    appPath: '../app',
    routingPattern: 'folder(route)',
});

const NEW_PAGE_TEMPLATE = `
import React from 'react';

const boxes = [
    '#ffffff',
    '#dcd9bf',
    '#f5f5f5',
    '#000000',
    '#282b2d',
    '#b6c1f0',
    '#cc6fd6',
    '#6a55a2',
    '#6a55a2bc',
    '#a09d2a',
    '#268040',
    '#92d0ab',
    '#7fc2f4',
    '#ffb615',
    '#ffd9e0',
    '#f486c9',
    '#fa9dbc',
    '#ff2f2f',
    '#ff5b2b',
    '#cccccc',
    '#3899ec',
    '#495cef',
    '#e7eaff',
    '#fcfcfc',
];

export default function NewPage() {
    return (
        <main className="newPage">
            {Array.from({length:  75}).map((_, idx) => (
                <div
                    key={idx}
                    className="box"
                    style={{
                        backgroundColor: randomItemFromArray(boxes),
                        width: \`\${randomNumberInRange(50, 180)}px\`,
                        height: '60px',
                        transform: \`rotate(\${randomNumberInRange(-45, 45)}deg)\`,
                        animationDelay: \`\${idx * 0.05}s\`,
                        top: \`\${randomNumberInRange(0, 95)}vh\`,
                        left: \`\${randomNumberInRange(0, 95)}vw\`,
                    }}
                />
            ))}
            <h1>Awesome!</h1>
            <h2>You have just created your first page.</h2>
            <h2>Now, the sky is the limit ✨</h2>
        </main>
    );
}

function randomItemFromArray<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
}

function randomNumberInRange(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}
`;

export default {
    ...app,
    getNewPageInfo(options) {
        const newPageInfo = app.getNewPageInfo?.(options);

        if (!newPageInfo) {
            return;
        }

        return {
            ...newPageInfo,
            newPageSourceCode: NEW_PAGE_TEMPLATE,
        };
    },
} as IReactApp<RouteExtraInfo>;
