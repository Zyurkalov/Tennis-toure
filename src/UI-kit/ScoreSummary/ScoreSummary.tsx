import React from 'react';
import CustomButton from '../CustomButton/CustomButton';
import styles from './ScoreSummary.module.scss';
import { WidthFull } from '@mui/icons-material';

export default function ScoreSummary({ callback }) {
    return (
        <ul className={`${styles.scoreSummaty}`}>
            <li className={`${styles.scoreSummaty__container}`}>
                <span>curr</span>
                <span>total</span>
            </li>
            <li
                className={`${styles.scoreSummaty__container} ${styles.scoreSummaty__container_center}`}
            >
                <span>0</span>
                <span>100</span>
            </li>
            <hr className={`${styles.scoreSummaty__line}`} />
            <li className={`${styles.scoreSummaty__container_center}`}>
                <span className={`${styles.scoreSummaty__count}`}>10</span>
            </li>
            <li>
                <CustomButton
                    callback={callback}
                    style={{ fontSize: '1.3rem' }}
                >
                    info
                </CustomButton>
            </li>
        </ul>
    );
}
