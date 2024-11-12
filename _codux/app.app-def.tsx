import defineRemixApp, { RouteExtraInfo } from '@wixc3/define-remix-app';
import { type IReactApp } from '@wixc3/app-core';

const app = defineRemixApp({
    appPath: '../app',
    routingPattern: 'folder(route)',
});

const NEW_PAGE_TEMPLATE = `
import React from 'react';
import vars from '~/globals/variables.module.scss';
import Boxes from '../../../src/assets/boxes.svg?react';

export default function NewPage() {
    return (
        <main className="newPage">
            <Boxes className="boxes" />
            <h1>Awesome!</h1>
            <h2>You have just created your own page.</h2>
            <h2>Now, the sky is the limit ✨</h2>
        </main>
    );
}
`;

export default {
    ...app,
    // Overriding the newSourceCode property to provide a custom
    // page template when a page is created.
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
