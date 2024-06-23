// import { useState } from 'react'

import Header from '../../components/header/header'
import TournamentBrief from '../../components/tournamentBrief/tournamentBrief'
import PlayersSearchForm from '../../components/playersSearchForm/playersSearchForm'
import PlayersScoreCards from '../../components/playersScoreCards/playersScoreCards'

import { HARD_DATA } from '../../components/playersScoreCards/constants'

// import { typeObjCart } from '../../components/playersScoreCards/constants';
import './Main.css'

const headerObj = {
  header: 'КУБОК ТЮМЕНИ', 
  paragraph: 'Здесь содержится краткий анонс и время проведения 20:00',
  image: 'Здесь будет src файл (фоновая картинка)'
}

function Main() {
  // const tournaments = useUnit($resultTournaments)

  return (
    <>
      <div className='page'>
        <Header />
        {/* <button onClick={() => {addTournament('TyumenCup')}}>+</button> */}
        <TournamentBrief textObject={headerObj}></TournamentBrief>
        <PlayersSearchForm />
        <PlayersScoreCards objTournament={HARD_DATA} />
      </div>
    </>
  )
}

export default Main