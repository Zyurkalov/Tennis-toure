import { useEffect, useState} from 'react'
import { useAppSelector } from '../../utilits';

import Header from '../../components/header/header'
import TournamentBrief from '../../components/tournamentBrief/tournamentBrief'
import PlayersSearchForm from '../../components/playersSearchForm/playersSearchForm'
import PlayersScoreCards from '../../components/playersScoreCards/playersScoreCards'
import { TournamentType } from './type';

// import { addTodo } from '../../services/actions';
import { ScreenType, useWindowsSize } from '../../utilits/hooks/useWindowSize';
import { SideMenu } from '../../components/sideMenu/SideMenu';
import { HARD_DATA, typeCart } from '../../components/playersScoreCards/constants'
import { MainContext } from './mainContext';

import styles from './main.module.scss';
import clsx from 'clsx';
import { useScreenStyle } from '../../utilits/hooks/useScreenStyle';


// const headerObj = {
//   header: "Кубок Тюмени", 
//   paragraph: 'Здесь содержится краткий анонс и время проведения 20:00',
//   image: 'Здесь будет src файл (фоновая картинка)'
// }
export function MainLayout({children}: any) {
    const sizeWindows = useWindowsSize()
    const [tournament, setTournament] = useState('' as TournamentType);
    const [filteredMatches, setFilteredMatches] = useState([] as typeCart[]);

    function getKeyByValue(value: string): string | undefined {
        return Object.keys(TournamentType).find(key => TournamentType[key as keyof typeof TournamentType] === value);
      }

    const getTournamentList = (tour: string) => {
        if(tour) {
          const nameTour = getKeyByValue(tour);
          if(nameTour) {
              return HARD_DATA[nameTour];
          } else {
              return HARD_DATA.TyumenCup;
          }
        } else {
            return HARD_DATA.TyumenCup;
        }
      }

    return (
        <MainContext.Provider
          value={{
            screen: sizeWindows as ScreenType,
            cards: getTournamentList(tournament),
            match: tournament,
            searchCards: filteredMatches
          }}
        >
          <div className={clsx(styles.page, useScreenStyle(styles, 'page'))}>
            {children}
          </div>
        </MainContext.Provider>
    )
}