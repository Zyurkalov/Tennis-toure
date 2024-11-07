import { FC,  useState } from "react"
import styles from "./tournamentBrief.module.css"

const TournamentBrief: FC<{ textObject: {[key: string]: string;} }> = ({textObject}) => {
    const [collapsed, setCollapsed]= useState(false);

    const collapseBrief = () => {setCollapsed(!collapsed)}
    return (
        <div className={`${styles.news} ${collapsed ? styles.news__collapsed : null}`}>
            <h1 className={styles.news_h}>{textObject.header}</h1>
            <div className={styles.news_container}>
                <p className={styles.news_p}>{textObject.paragraph}</p>
                {/* <button className={styles.news_botton} onClick={() => collapseBrief()}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#666666"><path d="M0 0h24v24H0z" fill="none"/><path d="M7 14l5-5 5 5z"/></svg></button> */}
            </div>
            
        </div>
    )
} 
export default TournamentBrief 