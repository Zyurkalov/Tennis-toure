import CustomButton from '../CustomButton/CustomButton';
import styles from './ScoreControls.module.scss';

export default function ScoreControls({ callback }) {
    const arrNumbers = [1, 2, 3, 4, 5, 6, 8, 0, 'del'];
    return (
        <ul className={`${styles.scoreControls}`}>
            {arrNumbers.map((num, i) => (
                <li className={`${styles.scoreControls__list}`} key={i}>
                    <CustomButton callback={callback}>{num}</CustomButton>
                </li>
            ))}
        </ul>
    );
}
