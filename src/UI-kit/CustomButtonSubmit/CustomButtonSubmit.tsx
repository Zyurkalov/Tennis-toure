import clsx from 'clsx';
import styles from './CustomButtonSubmit.module.scss';
import { SyntheticEvent, ReactNode, ButtonHTMLAttributes } from 'react';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    callback: () => void;
    children: ReactNode;
}

export default function CustomButtonSubmit({
    children,
    callback,
    ...props
}: CustomButtonProps) {
    const handleClick = (e: SyntheticEvent<HTMLButtonElement>) => {
        e.preventDefault();
        callback();
    };

    return (
        <button
            type='submit'
            onClick={handleClick}
            className={clsx(styles.button)}
            {...props}
        >
            {children}
        </button>
    );
}
