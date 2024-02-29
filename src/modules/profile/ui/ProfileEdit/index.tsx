import React, { FC } from 'react';
import { ScreenContainer } from '../../../../UIKit/screenContainer';
import { observer } from 'mobx-react';
import { useUiContext } from '../../../../UIProvider';
import { EditProfileHeader } from '../components/editProfileHeader';

export const ProfileEditView: FC = observer(() => {
    const { t } = useUiContext();

    return (
        <ScreenContainer edges={['left', 'right']} >
            <EditProfileHeader />
        </ScreenContainer>
    );
});
