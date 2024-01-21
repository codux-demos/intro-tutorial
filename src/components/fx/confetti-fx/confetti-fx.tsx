import { CreateTypes } from 'canvas-confetti';
import React, { useCallback, useEffect, useRef } from 'react';
import ReactCanvasConfetti from 'react-canvas-confetti';
import vars from '../../../globals/variables.module.scss';
import styles from './confetti-fx.module.scss';

export interface ConfettiFxProps {
    show?: boolean;
    dissolve?: number;
    maxParticles?: number;
    style?: React.CSSProperties;
}

const animationColors = [
    'dirtyWhite',
    'lavender',
    'lilac',
    'darkLavender',
    'oliveGreen',
    'richGreen',
    'turquoiseGreen',
    'aeroBlue',
    'goldYellow',
    'danaPink',
    'hotPink',
    'pastelPink',
    'hotRed',
    'orangeRed',
];

export const ConfettiFx = ({
    show = false,
    dissolve = 200,
    maxParticles = 50,
    style,
}: ConfettiFxProps) => {
    const refAnimationInstance = useRef<confetti.CreateTypes | null>(null);

    const getInstance: (instance: { confetti: CreateTypes }) => void = (instance: {
        confetti: CreateTypes;
    }) => {
        refAnimationInstance.current = instance.confetti;
    };

    const fire = useCallback(
        (ratio: number, config: confetti.Options) => {
            refAnimationInstance.current &&
                refAnimationInstance.current({
                    ...config,
                    colors: getAnimationColorValues(),
                    gravity: 0.5,
                    ticks: dissolve,
                    origin: { y: 1.2 },
                    particleCount: Math.floor(maxParticles * ratio),
                });
        },
        [dissolve, maxParticles]
    );

    useEffect(() => {
        if (show) {
            fire(0.25, {
                spread: 26,
                startVelocity: 55,
                scalar: 0.6,
            });
            fire(0.2, {
                spread: 60,
            });
            fire(0.35, {
                spread: 100,
                decay: 0.91,
                scalar: 0.8,
            });
            fire(0.1, {
                spread: 120,
                startVelocity: 25,
                decay: 0.92,
                scalar: 1.2,
            });
            fire(0.1, {
                spread: 120,
                startVelocity: 45,
                scalar: 0.6,
            });
        }
    }, [show, fire]);

    return <ReactCanvasConfetti onInit={getInstance} className={styles.root} style={style} />;
};

function getAnimationColorValues(): string[] {
    const colors: string[] = [];

    for (const color of animationColors) {
        const value = vars[color];
        if (value) {
            colors.push(value);
        }
    }

    return colors;
}
