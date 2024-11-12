import React, { useEffect } from 'react';
import classNames from 'classnames';
import styles from './dialog.module.scss';
import { createPortal } from 'react-dom';

export interface DialogBackdropProps extends React.PropsWithChildren {
    className?: string;
    open?: boolean;
    onClose?: () => void;
}

export const Dialog: React.FC<DialogBackdropProps> = ({
    className,
    open = false,
    onClose,
    children,
}) => {
    if (!open) return;

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose?.();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => document.removeEventListener('keydown', handleKeyDown);
    }, [onClose]);

    return createPortal(
        <div className={classNames(styles.dialog, className)} onClick={onClose}>
            {children}
        </div>,
        document.body
    );
};
