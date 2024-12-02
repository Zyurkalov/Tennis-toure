import { ScreenType, useWindowsSize } from "./useWindowSize";
// import { useContext } from "react";
// import { MainContext } from "../../page/Main/mainContext";

export const useScreenStyle = (styles: CSSModuleClasses, styleName: string) => {
    const screen = useWindowsSize()
    // console.log(MainContext)

    return screen === ScreenType.mobile ? styles[styleName +'_mobile']
    : screen === ScreenType.tablet ? styles[styleName +'_tablet']
    : styles[styleName +'_desktop']
};