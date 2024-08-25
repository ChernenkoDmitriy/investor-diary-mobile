import { Dimensions, PixelRatio, Platform } from "react-native";

export const isIOS =  Platform.OS === 'ios';

export const declOfWord = (num: number, word: Array<string>): string => {
    const cases = [2, 0, 1, 1, 1, 2];
    if (Array.isArray(word)) {
        // @ts-ignore
        return `${num} ${word[(num % 100 > 4 && num % 100 < 20) ? 2 : cases[(num % 10 < 5) ? num % 10 : 5]] || word[2]}`;
    }
    return '';
};

// scale 

const idealWidth: number = 375;
const idealHeight: number = 812;
const size: { width: number, height: number } = Dimensions.get('window');
const ratio: number = PixelRatio.getFontScale();

export const scaleHorizontal = (inWidth: number = 1): number => {
    const delimiter: number = idealWidth / inWidth;
    return size.width / delimiter;
};

export const scaleVertical = (inHeight: number = 1) => {
    const delimiter: number = idealHeight / inHeight;
    return size.height / delimiter;
};

export const scaleFontSize = (fontSize: number = 1): number => {
    const divisionRatio: number = idealWidth / (fontSize / ratio);
    return size.width / divisionRatio;
};

export const scaleLineHeight = (lineHeight: number = 1): number => {
    const divisionRatio: number = idealHeight / (lineHeight / ratio);
    return size.height / divisionRatio;
};