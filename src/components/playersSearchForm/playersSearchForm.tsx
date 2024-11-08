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

  const handleScreenStyle = (styleName: string) => {
    return sizeWindows === ScreenType.mobile ? styles[styleName +'_mobile']
      : sizeWindows === ScreenType.tablet ? styles[styleName +'_tablet']
      : styles[styleName +'_desktop']
  }

  const handleNotMobileStyle = (styleName: string)  => {
    return sizeWindows !==  ScreenType.mobile ? styles[styleName + '_notMobile'] : null
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleChangeMutch = (event: SyntheticEvent<Element, Event>) => {
    console.log((event.target as HTMLInputElement).textContent);
  }

  return (
    <div className={clsx(styles.inputField, handleScreenStyle('inputField__screen'), "drop-shadow")}>
        <Autocomplete
          disablePortal
          id="combo-box-demo"
          options={setTournaments}
          onChange={handleChangeMutch}
          renderInput={(params) => <TextField {...params} label="Турнир" />}
          className={clsx(styles.inputField__tournaments, handleNotMobileStyle('inputField__tournaments'))}
        />
        <TextField
          id="demo-helper-text-aligned-no-helper"
          label="Найти игрока"
          maxRows={1}
          onChange={handleChange}
          value={inputValue}
          className={clsx(styles.inputField__player, handleNotMobileStyle('inputField__player'))}
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