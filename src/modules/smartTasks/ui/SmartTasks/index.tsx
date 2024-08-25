import React, { FC, useCallback, useMemo } from 'react';
import { observer } from 'mobx-react';
import { useUiContext } from '../../../../UIProvider';
import { ScreenContainer } from '../../../../UIKit/screenContainer';
import { FlatList } from 'react-native';
import { useSmartTasks } from '../../presenters/useSmartTasks';
import { FloatingButton } from '../../../../UIKit/FloatingButton';
import { useRefresh } from '../../../../hooks/useRefresh';
import { SmartTaskSkeleton } from '../components/smartTaskSkeleton';
import { ISmartTask } from '../../entity/ISmartTask';
import { SmartTasksListItem } from '../components/smartTasksListItem';
import { getStyles } from './styles';
import { EmptyListView } from '../../../../UIKit/emptyListView';

export const SmartTasksView: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyles(colors), [colors]);
    const { onGoToCreateSmartTask, onGoToCreateSmartDetails, onRefresh, data, isLoading } = useSmartTasks();
    const { refreshControl, refreshing } = useRefresh(onRefresh);

    const keyExtractor = useCallback((item: ISmartTask) => `${item.id}`, []);

    const renderItem = useCallback(({ item }: { item: ISmartTask }) => {
        return <SmartTasksListItem item={item} onPress={onGoToCreateSmartDetails} />;
    }, []);

    return (
        <ScreenContainer edges={['top']} >
            {isLoading
                ? <SmartTaskSkeleton count={6} />
                : <FlatList
                    showsVerticalScrollIndicator={false}
                    refreshControl={refreshControl}
                    refreshing={refreshing}
                    data={data}
                    keyExtractor={keyExtractor}
                    renderItem={renderItem}
                    contentContainerStyle={styles.contentContainer}
                    ListEmptyComponent={<EmptyListView text={t('noSmartTasksYet')} />}
                />}
            <FloatingButton onPress={onGoToCreateSmartTask} />
        </ScreenContainer>
    );
});
