import React, { FC } from 'react';
import { ScreenContainer } from '../../../UIKit/screenContainer';
import { observer } from 'mobx-react';
import { ProfileHeader } from './components/profileHeader';
import { ProfileItem } from './components/profileItem';
import { useUiContext } from '../../../UIProvider';
import { ProfileItemsContainer } from './components/profileItemsContainer';
import { ExitIcon } from '../../../assets/icons/ExitIcon';
import { useProfile } from '../presenters/useProfile';

export const ProfileView: FC = observer(() => {
    const { t } = useUiContext();
    const { onExit } = useProfile();

    return (
        <ScreenContainer edges={['left', 'right']} >
            <ProfileHeader />
            <ProfileItemsContainer >
                <ProfileItem text={t('common.exit')} icon={<ExitIcon />} onPress={onExit} />
            </ProfileItemsContainer>
        </ScreenContainer>
    );
});
