import {
    FC,
    useState,
    useEffect,
    ChangeEvent,
    SyntheticEvent,
    useContext,
} from 'react';
import styles from './playersSearchForm.module.scss';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import clsx from 'clsx';
import { TournamentType } from '../../page/Main/type';
import { MainContext } from '../../page/Main/mainContext';
import useScreenStyle from '../../utilits/hooks/useScreenStyle';

const PlayersSearchForm: FC<{
    setTournament: any;
    setFilteredMatches: any;
}> = ({ setTournament, setFilteredMatches }) => {
    const [inputValue, setInputValue] = useState('');
    const { cards } = useContext(MainContext);

    useEffect(() => {
        const delaySearch = setTimeout(() => {
            const regexPattern = new RegExp(`${inputValue.trim()}`, 'i');

            const filteredMatches = cards.filter(
                match =>
                    match.playerOne.player.some(name =>
                        regexPattern.test(name),
                    ) ||
                    match.playerTwo.player.some(name =>
                        regexPattern.test(name),
                    ),
            );

            if (inputValue.length > 3) {
                setFilteredMatches(filteredMatches);
            }
            if (inputValue === '') {
                setFilteredMatches(cards);
            }
        }, 1000);

        return () => clearTimeout(delaySearch);
    }, [inputValue, cards]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleChangeMutch = (event: SyntheticEvent<Element, Event>) => {
        setTournament((event.target as HTMLInputElement).textContent);
    };

    return (
        <div
            className={clsx(
                styles.inputField,
                useScreenStyle(styles, 'inputField__screen'),
                'drop-shadow',
            )}
        >
            <Autocomplete
                disablePortal
                id='combo-box-demo'
                options={Object.keys(TournamentType).map(
                    key => TournamentType[key as keyof typeof TournamentType],
                )}
                onChange={handleChangeMutch}
                renderInput={params => <TextField {...params} label='Турнир' />}
                className={clsx(
                    styles.inputField__tournaments,
                    useScreenStyle(styles, 'inputField__tournaments'),
                )}
            />
            <TextField
                id='demo-helper-text-aligned-no-helper'
                label='Найти игрока'
                maxRows={1}
                onChange={handleChange}
                value={inputValue}
                className={clsx(
                    styles.inputField__player,
                    useScreenStyle(styles, 'inputField__player'),
                )}
                InputProps={{
                    startAdornment: (
                        <InputAdornment position='start'>
                            <SearchIcon fontSize='large' />
                        </InputAdornment>
                    ),
                }}
            />
        </div>
    );
};
export default PlayersSearchForm;
