import React, { FC, memo, useMemo } from 'react';
import { TouchableOpacity, View } from "react-native";
import { IInvestment } from '../../../entity/IInvestment';
import { useUiContext } from '../../../../../UIProvider';
import { getStyle } from './styles';
import FastImage from 'react-native-fast-image';
import { Typography } from '../../../../../UIKit/Typography';
import { StackIcon } from '../../../../../assets/icons/StackIcon';
import { ArrowIcon } from '../../../../../assets/icons/ArrowIcon';

interface IProps {
    item: IInvestment;
    onPress?: (item: IInvestment) => void;
}

export const InvestmentListItem: FC<IProps> = memo(({ item, onPress }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    const onHandlePress = () => {
        onPress && onPress(item);
    }

    return (
        <TouchableOpacity style={styles.container} onPress={onHandlePress}>
            <View style={styles.block}>
                <View style={styles.flexRow}>
                    <FastImage source={{ uri: item.icon }} style={styles.image} />
                    <Typography type='h5' text={item.ticker} />
                </View>
                <View style={styles.flexRow}>
                    <View style={styles.iconWrapper}><StackIcon width={16} height={16} /></View>
                    <Typography numberOfLines={1} type='subtitle2' text={`${item.amount} ${t('for')} ${item.enteringPrice}`} />
                </View>
            </View>
            <View style={styles.block}>
                <View style={styles.flexRowEnd}>
                    <Typography type='h5' text={`${item.enteringPrice} ${item.currency}`} />
                </View>
                <View style={styles.flexRowEnd}>
                    <Typography type='subtitle2' text={item.enteringDate} />
                </View>
            </View>
            <ArrowIcon color={colors.icon_strong} position='RIGHT' />
        </TouchableOpacity>
    );
})