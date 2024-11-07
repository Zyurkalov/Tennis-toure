import { FC, useState, useEffect, ChangeEvent, SyntheticEvent } from "react";
import styles from './playersSearchForm.module.scss'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { HARD_DATA } from "../playersScoreCards/constants";

import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import { ScreenType } from "../../utilits/hooks/useWindowSize";
import clsx from "clsx";

const PlayersSearchForm: FC<{sizeWindows: string}> = ({sizeWindows}) => {

  const setTournaments = ['Кубок Тюмени', 'Новые Имена', 'Australian Open']
  const [inputValue, setInputValue] = useState('');
  const cards = HARD_DATA.TyumenCup

  useEffect(() => {
    const delaySearch = setTimeout(() => {
      const regexPattern = new RegExp(`${inputValue.trim()}`, 'i');

      const filteredMatches = cards.filter(match => (
        match.playerOne.player.some(name => regexPattern.test(name)) ||
        match.playerTwo.player.some(name => regexPattern.test(name))
      ));

      if (filteredMatches.length !== 0 && inputValue.length > 2) {
        console.log(filteredMatches);
      }
    }, 1000); 

    return () => clearTimeout(delaySearch);
  }, [inputValue]);

  const handleStyle = () => {
    return sizeWindows === ScreenType.mobile ? styles.inputField__screen_mobile
      : sizeWindows === ScreenType.tablet ? styles.inputField__screen_tablet
      : styles.inputField__screen_desktop
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleChangeMutch = (event: SyntheticEvent<Element, Event>) => {
    console.log((event.target as HTMLInputElement).textContent);
  }

  return (
    <div className={clsx(styles.inputField, handleStyle(), "drop-shadow")}>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={setTournaments}
        onChange={handleChangeMutch}
        renderInput={(params) => <TextField {...params} label="Турнир" />}
        // sx={{minWidth: 300}}
 
      />
      <TextField
        id="demo-helper-text-aligned-no-helper"
        label="Найти игрока"
        maxRows={1}
        onChange={handleChange}
        value={inputValue}
        // sx={{width: 30000}}
        // size="small"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon fontSize="large" />
            </InputAdornment>
          ),
        }}
      />
    </div>
  )
}
export default PlayersSearchForm;