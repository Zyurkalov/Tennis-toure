import { FC, useState, useEffect } from "react";
import styles from './playersSearchForm.module.css'
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { HARD_DATA } from "../playersScoreCard/constants";

import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';


const PlayersSearchForm: FC = () => {
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

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <div className={`${styles.inputField} drop-shadow`}>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={setTournaments}
        // sx={{ width: 300 }}
        // defaultValue="Small"
        // size="small"
        renderInput={(params) => <TextField {...params} label="Турнир" />}
      />
      <TextField
        id="demo-helper-text-aligned-no-helper"
        label="Найти игрока"
        maxRows={1}
        onChange={handleChange}
        value={inputValue}
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