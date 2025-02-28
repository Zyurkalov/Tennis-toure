import Autocomplete from '@mui/material/Autocomplete';
import { AssessmentServiceTypes } from '../types';
import { useState, ChangeEvent, useEffect, SyntheticEvent } from 'react';

import clsx from 'clsx';
import { TextField } from '@mui/material';

import styles from './assessmentSet.module.scss';
import CustomButtonSubmit from '../../UI-kit/CustomButtonSubmit/CustomButtonSubmit';
import Scoreboard from '../../UI-kit/Scoreboard/Scoreboard';
import CustomButton from '../../UI-kit/CustomButton/CustomButton';

export default function AssessmentSet() {
    const [inputPlayer, setInputPlayer] = useState('');
    const [inputValue, setInputValue] = useState('');

    const handleChangePlayer = (event: ChangeEvent<HTMLInputElement>) => {
        setInputPlayer(event.target.value);
    };

    // useEffect(() => {
    //     console.log(inputValue);
    // }, [inputValue]);

    function callBack() {
        return;
    }

    return (
        <form className={clsx(styles.form)}>
            <div className={styles.inputContainer}>
                <Autocomplete
                    inputValue={inputValue}
                    onInputChange={(_, newInputValue) => {
                        setInputValue(newInputValue);
                    }}
                    id='controllable-states-demo'
                    options={Object.keys(AssessmentServiceTypes).map(
                        key =>
                            AssessmentServiceTypes[
                                key as keyof typeof AssessmentServiceTypes
                            ],
                    )}
                    renderInput={params => (
                        <TextField {...params} label='Тип тренировки' />
                    )}
                    className={clsx()}
                />
                <TextField
                    id='demo-helper-text-aligned-no-helper'
                    label='Игрок'
                    maxRows={1}
                    onChange={handleChangePlayer}
                    value={inputPlayer}
                    className={clsx(styles.form__textField)}
                />
            </div>
            <div></div>
            <Scoreboard />
            {/* <ScoreControls /> */}
            {/* <ScoreSummary /> */}
            <CustomButton callback={callBack}>1</CustomButton>
            <CustomButtonSubmit callback={callBack}>
                добавить счет
            </CustomButtonSubmit>
        </form>
    );
}
