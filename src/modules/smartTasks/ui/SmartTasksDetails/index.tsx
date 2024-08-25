import React, { FC, useMemo } from 'react';
import { observer } from 'mobx-react';
import { useUiContext } from '../../../../UIProvider';
import { ScreenContainer } from '../../../../UIKit/screenContainer';
import { HeaderWithBackButton } from '../../../../UIKit/HeaderWithBackButton';
import { getStyles } from './styles';
import { HeaderButtons } from '../../../../UIKit/HeaderButtons';
import { useSmartTasksDetails } from '../../presenters/useSmartTasksDetails';
import { Typography } from '../../../../UIKit/Typography';
import { SmartCardDetails } from '../components/smartCardDetails';
import { SmartTaskDetailsProgress } from '../components/smartTaskDetailsProgress';

export const SmartTasksDetailsView: FC = observer(() => {
    const { t, colors } = useUiContext();
    const styles = useMemo(() => getStyles(colors), [colors]);
    const { smartTask, onChangeValue, onSave, onDelete, onGoToEdit } = useSmartTasksDetails();

    return (
        <ScreenContainer
            containerStyle={styles.container}
            headerComponent={<HeaderWithBackButton title={smartTask.name}
                rightComponent={<HeaderButtons onEdit={onGoToEdit} onDelete={onDelete} />} />}
            scrollEnabled
        >
            <SmartTaskDetailsProgress value={smartTask?.progress_value || ''} onChangeValue={onChangeValue} onSave={onSave} />
            <SmartCardDetails />
        </ScreenContainer>
    );
});
