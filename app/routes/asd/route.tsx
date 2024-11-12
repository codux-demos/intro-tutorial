
import React from 'react';
import { boxes } from '../../constants';
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

function randomItemFromArray<T>(array: T[]): T {
    return array[Math.floor(Math.random() * array.length)];
}

function randomNumberInRange(min: number, max: number): number {
    return Math.random() * (max - min) + min;
}
