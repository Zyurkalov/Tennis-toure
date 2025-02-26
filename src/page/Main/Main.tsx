import { useState } from 'react';

import TournamentBrief from '../../components/tournamentBrief/tournamentBrief';
import PlayersSearchForm from '../../components/playersSearchForm/playersSearchForm';
import PlayersScoreCards from '../../components/playersScoreCards/playersScoreCards';
import { TournamentType } from './type';
import { ScreenType, useWindowsSize } from '../../utilits/hooks/useWindowSize';
import { typeCart } from '../../components/playersScoreCards/constants';
import { MainContext } from './mainContext';
import { getTournamentList } from '../../utilits/getTournamentList';

import styles from './main.module.scss';
import clsx from 'clsx';
import useScreenStyle from '../../utilits/hooks/useScreenStyle';

const headerObj = {
    header: 'Кубок Тюмени',
    paragraph: 'Здесь содержится краткий анонс и время проведения 20:00',
    image: 'Здесь будет src файл (фоновая картинка)',
};

function Main() {
    const sizeWindows = useWindowsSize();
    const [tournament, setTournament] = useState('' as TournamentType);
    const [filteredMatches, setFilteredMatches] = useState([] as typeCart[]);

    return (
        <MainContext.Provider
            value={{
                screen: sizeWindows as ScreenType,
                cards: getTournamentList(tournament),
                match: tournament,
                searchCards: filteredMatches,
            }}
        >
            <div className={clsx(styles.page, useScreenStyle(styles, 'page'))}>
                <TournamentBrief textObject={headerObj}></TournamentBrief>
                <PlayersSearchForm
                    setTournament={setTournament}
                    setFilteredMatches={setFilteredMatches}
                />
                <PlayersScoreCards />
            </div>
        </MainContext.Provider>
    );
}
export default Main;
