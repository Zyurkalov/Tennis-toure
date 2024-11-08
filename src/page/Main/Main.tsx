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
import styles from './main.module.scss';
import { useWindowsSize } from '../../utilits/hooks/useWindowSize';
import { Style } from '@mui/icons-material';
import { SideMenu } from '../../components/sideMenu/SideMenu';

const headerObj = {
  header: "Кубок Тюмени", 
  paragraph: 'Здесь содержится краткий анонс и время проведения 20:00',
  image: 'Здесь будет src файл (фоновая картинка)'
}

function Main() {
  const sizeWindows = useWindowsSize()
  const dispatch = useAppDispatch();
  const store = useAppSelector(state => state?.todos);
  const statusMenu = useAppSelector(state => state?.menu)

useEffect(() => {
  console.log(store.todo); 
  console.log(statusMenu.menu)
}, [store.todo, statusMenu.menu]);

  return (
    <>
      <div className={styles.page}>
        <Header sizeWindows={sizeWindows}/>
        <TournamentBrief textObject={headerObj} sizeWindows={sizeWindows}></TournamentBrief>
        <PlayersSearchForm sizeWindows={sizeWindows}/>
        <PlayersScoreCards objTournament={HARD_DATA} sizeWindows={sizeWindows}/>

        {statusMenu.menu && <SideMenu />}
        {/* <SideMenu aria-hidden={statusMenu.menu ? 'false' : 'true'}/> */}
        {/* <SideMenu /> */}
      </div>
    </>
  )
}

export default Main