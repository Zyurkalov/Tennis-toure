import { ScreenType, useWindowsSize } from './useWindowSize';

const useScreenStyle = (styles: CSSModuleClasses, styleName: string) => {
    const screen = useWindowsSize();

    return screen === ScreenType.mobile
        ? styles[styleName + '_mobile']
        : screen === ScreenType.tablet
          ? styles[styleName + '_tablet']
          : styles[styleName + '_desktop'];
};

export default useScreenStyle;
