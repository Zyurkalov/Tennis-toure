// import { useState } from 'react'

import Header from '../../components/header/header'
import TournamentBrief from '../../components/tournamentBrief/tournamentBrief'
import PlayersSearchForm from '../../components/playersSearchForm/playersSearchForm'
import PlayersScoreCard from '../../components/playersScoreCard/playersScoreCard'
import './App.css'


function App() {

  const headerObj = {
    header: 'КУБОК ТЮМЕНИ', 
    paragraph: 'Здесь содержится краткий анонс и время проведения 20:00',
  }

  return (
    <>
      <div className='page'>
        <Header></Header>
        <TournamentBrief textObject={headerObj}></TournamentBrief>
        <PlayersSearchForm />
        <PlayersScoreCard />
      </div>
    </>
  )
}

export default App
