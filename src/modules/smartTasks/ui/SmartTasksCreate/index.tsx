import React, { FC, useMemo } from 'react';
import { observer } from 'mobx-react';
import { useUiContext } from '../../../../UIProvider';
import { ScreenContainer } from '../../../../UIKit/screenContainer';
import { HeaderWithBackButton } from '../../../../UIKit/HeaderWithBackButton';
import { getStyles } from './styles';
import { SpecificDropdown } from '../components/specificDropdown';
import { useSmartTasksCreate } from '../../presenters/useSmartTasksCreate';
import { SmartTaskInput } from '../components/smartTaskInput';
import { TimeBoundCalendar } from '../components/timeBoundCalendar';
import { HeaderButtons } from '../../../../UIKit/HeaderButtons';
import { SmartTaskMeasurable } from '../components/smartTaskMesurable';

export const SmartTasksCreateView: FC = observer(() => {
    const { t, colors } = useUiContext();
    const styles = useMemo(() => getStyles(colors), [colors]);
    const { smartTask, onChangeValue, onChoseDate, onSave } = useSmartTasksCreate();

    return (
        <ScreenContainer
            containerStyle={styles.container}
            headerComponent={<HeaderWithBackButton title={t('createSmartTasks')}
                rightComponent={<HeaderButtons onCreate={onSave} />} />}
            scrollEnabled
        >
            <SmartTaskInput
                label={t('name')}
                option={'name'}
                value={smartTask?.name}
                onChangeText={onChangeValue}
            />
            <SpecificDropdown onChange={onChangeValue} value={smartTask?.specific} />
            <SmartTaskMeasurable
                label={t('measurable')}
                option={'measurable'}
                value={smartTask?.measurable}
                onChangeText={onChangeValue}
                currency={smartTask?.currency}
            />
            <SmartTaskInput
                label={t('achievable')}
                option={'achievable'}
                value={smartTask?.achievable}
                onChangeText={onChangeValue}
            />
            <SmartTaskInput
                label={t('relevant')}
                option={'relevant'}
                value={smartTask?.relevant}
                onChangeText={onChangeValue}
            />
            <TimeBoundCalendar
                label={t('time_bound')}
                value={smartTask?.time_bound}
                onChoseDate={onChoseDate}
            />
        </ScreenContainer>
    );
});
