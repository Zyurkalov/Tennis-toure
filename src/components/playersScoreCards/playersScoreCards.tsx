import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { FC } from "react"
// import DoneIcon from '@mui/icons-material/Done';
// import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import {typeCart, typeObjCart } from "./constants"
import styles from './playersScoreCards.module.scss'
import { ScreenType } from '../../utilits/hooks/useWindowSize';
import clsx from 'clsx';

const PlayersScoreCard: FC<{ objTournament?: typeObjCart, sizeWindows: string }> = ({objTournament, sizeWindows}) => {

  const matchStatus = (obj: typeCart) => {
    return obj.status === 'completed' 
      ? {status: "Завершен", style: styles.card_status__completed} 
      : {status: "Идет", style: styles.card_status__continues} 
  }
  const determineMatchResult = (obj: typeCart) => {
    const playerOneScore = obj.playerOne.score.reduce((total, num) => total + num, 0)
    const playerTwoScore = obj.playerTwo.score.reduce((total, num) => total + num, 0)

    // const isPlayerOneWins = playerOneScore > playerTwoScore;
    // const isPlayerTwoWins = playerOneScore < playerTwoScore;

    if (playerOneScore === null || playerTwoScore === null) {
      console.error(`что то не так с объектом ${obj}`)
      return
    } 
    if(playerOneScore > playerTwoScore) {
      return {winner: obj.playerOne , defeat: obj.playerTwo, isGameDraw: false}
    } else if(playerOneScore < playerTwoScore) {
      return {winner: obj.playerTwo , defeat: obj.playerOne, isGameDraw: false}
    } else {
      return {winner: obj.playerOne , defeat: obj.playerTwo, isGameDraw: true}
    }
  }

  const handleStyle = () => {
    return sizeWindows === ScreenType.mobile ? styles.gridContainer_mobile
      : sizeWindows === ScreenType.tablet ? styles.gridContainer_tablet
      : styles.gridContainer_desktop
  }

    return (
      <ul className={clsx(styles.gridContainer, handleStyle()) }>
        { objTournament?.TyumenCup !== undefined 
            ? objTournament.TyumenCup.map((element, index) => (
                <li key={index} className={styles.card}>
                  <div className={styles.card_header}>
                    <h2 className={styles.card_title}>{element.type}</h2>
                    <ul className={styles.card_info}>
                      <li className={`${styles.card_status} ${matchStatus(element).style}`}>{matchStatus(element).status}</li>
                      <li className={styles.card_time}>{element.time}</li>
                    </ul>
                  </div> 

                  <ul>
                  {[determineMatchResult(element)!.winner, determineMatchResult(element)!.defeat].map((value, i) => (
                    <li className={styles.card_playerRow} key ={i}>
                    <ul>
                    {value.player.map((player, y) => (
                      <li key={y}>
                        <p className={`${styles.playerRow_p} ${i === 0 ? styles.playerRow_p__winner : styles.playerRow_p__defeat}`}>{player}</p>
                      </li>
                    ))}
                    </ul>
                    <ul className={styles.card_scoreList}>
                    {i === 0 && !determineMatchResult(element)!.isGameDraw && element.status === "completed"
                      ? <EmojiEventsIcon fontSize="small" sx={{ marginRight: '10px', color: 'rgba(146, 146, 146, 1)' }}/> 
                      : null}
                      {value.score.map ((score, y) => (
                        
                        <li className={styles.card_score} key={y}>
                          <p className={`${styles.playerRow_p} ${i === 0 ? styles.playerRow_p__winner : styles.playerRow_p__defeat}`}>{score}</p>
                        </li>
                      ))}
                    </ul>
                  </li>
                  ))}
                  </ul>
                </li>      
            ))
            : null
        }
        
      </ul>
    )
  }

  export default PlayersScoreCard