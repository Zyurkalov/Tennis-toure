import { ScreenType, useWindowsSize } from "./useWindowSize";

export const useScreenStyle = (styles: CSSModuleClasses, styleName: string) => {
    const screen = useWindowsSize()

    return screen === ScreenType.mobile ? styles[styleName +'_mobile']
    : screen === ScreenType.tablet ? styles[styleName +'_tablet']
    : styles[styleName +'_desktop']
};