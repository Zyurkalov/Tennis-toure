import React from "react";
import { TournamentType } from "./type";
import { ScreenType } from "../../utilits/hooks/useWindowSize";
import { typeCart } from "../../components/playersScoreCards/constants";

export const obj = {
    screen: ScreenType.mobile,
    match: TournamentType.TyumenCup,
    cards: [] as typeCart[],
    searchCards: [] as typeCart[],
}
export const MainContext = React.createContext(obj);