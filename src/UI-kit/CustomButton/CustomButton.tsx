import styles from './CustomButton.module.scss';
import { SyntheticEvent, ReactNode, ButtonHTMLAttributes } from 'react';

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    callback: () => void;
    children: ReactNode;
}

export default function CustomButton({
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
            className={`${styles.button}`}
            {...props}
        >
            {children}
        </button>
    );
}
