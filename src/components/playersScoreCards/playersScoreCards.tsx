import { useContext, useEffect } from "react"
import { ScreenType } from '../../utilits/hooks/useWindowSize';
import { Card } from '../card/Card';
import { MainContext } from "../../page/Main/mainContext";
import clsx from 'clsx';
import styles from './playersScoreCards.module.scss'
import { typeCart } from "./constants";

const PlayersScoreCard = () => {

  const {screen, cards, searchCards} = useContext(MainContext);
  const userCardsFind = Object.keys(searchCards).length
  const handleStyle = () => {
    return screen === ScreenType.mobile ? styles.gridContainer_mobile
      : screen === ScreenType.tablet ? styles.gridContainer_tablet
      : styles.gridContainer_desktop
  }
  useEffect(() => {
    console.log(userCardsFind)
  }, [searchCards])
  const getCards = (element: typeCart, index: number) => {
    return (
        <li key={index} className={styles.card}>
          <Card element={element} index={index} />
        </li>
    )
  }

    return (
      <ul className={clsx(styles.gridContainer, handleStyle())}>
        {userCardsFind === 0 ? (
          <>
            <div className={styles.notFound}>
              {/**/}
            </div>
            <div className={styles.notFound}>
              <span className={styles.notFound__span}>ничего нет</span>
            </div>
          </>
        ) : userCardsFind ? (
          searchCards.map((element, index) => getCards(element, index))
        ) : cards !== null ? (
          cards.map((element, index) => getCards(element, index))
        ) : null}
      </ul>
    );
  }

  export default PlayersScoreCard