import Autocomplete from '@mui/material/Autocomplete';
import { AssessmentServiceTypes } from '../types';
import { useState, ChangeEvent } from 'react';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';

import clsx from 'clsx';
import { TextField } from '@mui/material';
import useScreenStyle from '../../utilits/hooks/useScreenStyle';
import styles from './assessmentSet.module.scss';

const headerObj = {
    header: 'Раз',
    paragraph: 'Два',
    image: 'Три',
};

export default function AssessmentSet() {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };
    return (
        <>
            <Autocomplete
                disablePortal
                id='combo-box-demo'
                options={Object.keys(AssessmentServiceTypes).map(
                    key =>
                        AssessmentServiceTypes[
                            key as keyof typeof AssessmentServiceTypes
                        ],
                )}
                onChange={() => {}}
                renderInput={params => (
                    <TextField {...params} label='Тип тренировки' />
                )}
            />
            <TextField
                id='demo-helper-text-aligned-no-helper'
                label='Игрок'
                maxRows={1}
                onChange={handleChange}
                value={inputValue}
                className={clsx()}
                // InputProps={{
                //     startAdornment: (
                //         <InputAdornment position='start'>
                //             <SearchIcon fontSize='large' />
                //         </InputAdornment>
                //     ),
                // }}
            />
        </>
    );
}
