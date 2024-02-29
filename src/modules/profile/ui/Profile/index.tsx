import React, { FC } from 'react';
import { ScreenContainer } from '../../../../UIKit/screenContainer';
import { observer } from 'mobx-react';
import { ProfileHeader } from '../components/profileHeader';
import { ProfileItem } from '../components/profileItem';
import { useUiContext } from '../../../../UIProvider';
import { ProfileItemsContainer } from '../components/profileItemsContainer';
import { useProfile } from '../../presenters/useProfile';
import { ExitIcon } from '../../../../assets/icons/ExitIcon';

export const ProfileView: FC = observer(() => {
    const { t } = useUiContext();
    const { onExit } = useProfile();

    return (
        <ScreenContainer >
            <ProfileHeader />
            <ProfileItemsContainer >
                <ProfileItem text={t('exit')} icon={<ExitIcon />} onPress={onExit} />
            </ProfileItemsContainer>
        </ScreenContainer>
    );
});
