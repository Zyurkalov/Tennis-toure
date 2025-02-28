import styles from './Scoreboard.module.scss';

export default function Scoreboard() {
    return (
        <div className={`${styles.horizontalList}`}>
            <span className={`${styles.horizontalList__headerSet}`}>set</span>
            <ol className={`${styles.horizontalList__container}`}>
                {[...Array(10)].map((num, i) => (
                    <li key={i} className={`${styles.horizontalList__list}`}>
                        <div className={`${styles.horizontalList__set}`}>
                            {i + 1}
                        </div>
                        <div className={`${styles.horizontalList__score}`}>
                            10
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
