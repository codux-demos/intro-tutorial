import React, { useEffect } from 'react';
import classNames from 'classnames';
import styles from './dialog-backdrop.module.scss';

export interface DialogBackdropProps extends React.PropsWithChildren {
    className?: string;
    open?: boolean;
    onClose?: () => void;
}

export const DialogBackdrop: React.FC<DialogBackdropProps> = ({
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

    return (
        <div className={classNames(styles.dialogBackdrop, className)} onClick={onClose}>
            {children}
        </div>
    );
};
