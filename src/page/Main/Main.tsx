import { useEffect} from 'react'
import { useAppDispatch, useAppSelector } from '../../utilits';

import Header from '../../components/header/header'
import TournamentBrief from '../../components/tournamentBrief/tournamentBrief'
import PlayersSearchForm from '../../components/playersSearchForm/playersSearchForm'
import PlayersScoreCards from '../../components/playersScoreCards/playersScoreCards'

import { addTodo } from '../../services/actions';
import { HARD_DATA } from '../../components/playersScoreCards/constants'

// import { typeObjCart } from '../../components/playersScoreCards/constants';
// import { DeviceUnknown } from '@mui/icons-material';
// import './Main.css'
import "/src/page/Main/Main.scss";
import { useWindowsSize } from '../../utilits/hooks/useWindowSize';

const headerObj = {
  header: "Кубок Тюмени", 
  paragraph: 'Здесь содержится краткий анонс и время проведения 20:00',
  image: 'Здесь будет src файл (фоновая картинка)'
}

function Main() {
  const sizeWindows = useWindowsSize()
  const dispatch = useAppDispatch();
  const store = useAppSelector(state => state?.todos);

useEffect(() => {
  console.log(store.todo); 
}, [store.todo]);

  return (
    <>
      <div className='page'>
        <Header />
        {/* <button onClick={() => {dispatch(addTodo('покормить кота'))}}>+</button> */}
        <TournamentBrief textObject={headerObj}></TournamentBrief>
        <PlayersSearchForm sizeWindows={sizeWindows}/>
        <PlayersScoreCards objTournament={HARD_DATA} sizeWindows={sizeWindows}/>
      </div>
    </>
  )
}

export default Main