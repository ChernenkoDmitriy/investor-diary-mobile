import React, { FC, useCallback, useMemo } from 'react';
import { SectionList } from "react-native";
import { useUiContext } from '../../../../../UIProvider';
import { getStyle } from './styles';
import { IMmTransaction } from '../../../entities/mmTransaction/IMmTransaction';
import { useRefresh } from '../../../../../hooks/useRefresh';
import { useMmTransactionsList } from '../../../presenters/useMmTransactionsList';
import { MmTransactionListItem } from '../mmTransactionListItem';
import { observer } from 'mobx-react';
import { Typography } from '../../../../../UIKit/Typography';

export const MmTransactionsList: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { loading, data, onEndReached, onRefresh, onGoToDetailInvestment } = useMmTransactionsList();
    const { refreshControl, refreshing } = useRefresh(onRefresh);

    const renderItem = useCallback(({ item }: any) => {
        return <MmTransactionListItem item={item} onPress={onGoToDetailInvestment} />
    }, []);

    const renderSectionHeader = useCallback(({ section: { title } }: any) => {
        return <Typography text={title} variant='h6' style={styles.title} />
    }, []);

    const keyExtractor = useCallback((item: IMmTransaction) => item.id?.toString(), []);

    return (
        <SectionList
            showsVerticalScrollIndicator={false}
            refreshControl={refreshControl}
            refreshing={refreshing}
            sections={data}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
            onEndReached={onEndReached}
            renderSectionHeader={renderSectionHeader}
        />
    );
})