import { FC,  useState } from "react"
import { ScreenType } from "../../utilits/hooks/useWindowSize";
import styles from "./tournamentBrief.module.scss"
import clsx from "clsx";

const TournamentBrief: FC<{ textObject: {[key: string]: string;}, sizeWindows:string }> = ({textObject, sizeWindows}) => {
    const [collapsed, setCollapsed]= useState(false);

    const handleStyle = () => {
        return sizeWindows === ScreenType.mobile ? styles.news__mobile
          : sizeWindows === ScreenType.tablet ? styles.news__tablet
          : styles.news__desktop
      }

    const collapseBrief = () => {setCollapsed(!collapsed)}
    return (
        <div className={clsx(styles.news, collapsed ? styles.news__collapsed : null, handleStyle())}>
            <h1 className={styles.news_h}>{textObject.header}</h1>
            <div className={styles.news_container}>
                <p className={styles.news_p}>{textObject.paragraph}</p>
                {/* <button className={styles.news_botton} onClick={() => collapseBrief()}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#666666"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 14l5-5 5 5z"/></svg></button> */}
            </div>
            
        </div>
    )
} 
export default TournamentBrief 