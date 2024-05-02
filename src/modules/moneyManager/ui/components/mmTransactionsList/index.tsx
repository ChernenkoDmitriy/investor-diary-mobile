import React, { FC, useCallback, useMemo } from 'react';
import { useUiContext } from '../../../../../UIProvider';
import { getStyle } from './styles';
import { IMmTransaction } from '../../../entities/mmTransaction/IMmTransaction';
import { useRefresh } from '../../../../../hooks/useRefresh';
import { useMmTransactionsList } from '../../../presenters/useMmTransactionsList';
import { MmTransactionListItem } from '../mmTransactionListItem';
import { observer } from 'mobx-react';
import { MmTransactionSectionHeader } from '../mmTransactionSectionHeader';
import BottomSheet, { BottomSheetSectionList } from '@gorhom/bottom-sheet';
import { scaleVertical } from '../../../../../utils';

export const MmTransactionsList: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { loading, data, onEndReached, onRefresh, onGoToDetailInvestment } = useMmTransactionsList();
    const { refreshControl, refreshing } = useRefresh(onRefresh);

    const renderItem = useCallback(({ item }: any) => {
        return <MmTransactionListItem item={item} onPress={onGoToDetailInvestment} />
    }, []);

    const renderSectionHeader = useCallback(({ section: { title } }: any) => {
        return <MmTransactionSectionHeader title={title} />
    }, []);

    const keyExtractor = useCallback((item: IMmTransaction) => item.id?.toString(), []);

    return (
        <BottomSheet
            backgroundStyle={styles.bottomSheet}
            index={0}
            snapPoints={[scaleVertical(400), scaleVertical(780)]}
        >
            <BottomSheetSectionList
                showsVerticalScrollIndicator={false}
                refreshControl={refreshControl}
                refreshing={refreshing}
                sections={data}
                renderItem={renderItem}
                keyExtractor={keyExtractor}
                onEndReached={onEndReached}
                renderSectionHeader={renderSectionHeader}
            />
        </BottomSheet>
    );
})