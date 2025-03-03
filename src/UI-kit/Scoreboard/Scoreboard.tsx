import { useRef, useEffect } from 'react';
import useDeviceType from '../../utilits/hooks/useDeviceType';
import styles from './Scoreboard.module.scss';

export default function Scoreboard() {
    const [mobile, tablet, desktop] = useDeviceType();
    const array = [0, 6, 10, 8, 4, 0, 5, 4, 10, 8];
    const changeColor = (num: number, maxValue: number) => {
        if (num < maxValue) return `${styles.horizontalList__score_color}`;
    };

    const containerRef = useRef<HTMLOListElement>(null);

    useEffect(() => {
        const container = containerRef.current;
        if (!container || !desktop) return;

        const handleWheel = (e: any) => {
            e.preventDefault();
            container.scrollBy({
                left: e.deltaY,
                behavior: 'smooth',
            });
        };

        container.addEventListener('wheel', handleWheel, { passive: false });

        return () => {
            container.removeEventListener('wheel', handleWheel);
        };
    }, [desktop]);

    return (
        <div className={`${styles.horizontalList}`}>
            <span className={`${styles.horizontalList__headerSet}`}>set</span>
            <ol
                className={`${styles.horizontalList__container}`}
                ref={containerRef}
            >
                {array.map((num, i) => (
                    <li key={i} className={`${styles.horizontalList__list}`}>
                        <div className={`${styles.horizontalList__set}`}>
                            {i + 1}
                        </div>
                        <div
                            className={`${styles.horizontalList__score} ${changeColor(num, 3)}`}
                        >
                            {num}
                        </div>
                    </li>
                ))}
            </ol>
            <span className={`${styles.horizontalList__headerCount}`}>
                count
            </span>
        </div>
    );
}
