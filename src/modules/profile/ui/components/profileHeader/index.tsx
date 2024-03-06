import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import { useUiContext } from '../../../../../UIProvider';
import { getStyles } from './styles';
import { Avatar } from '../../../../../UIKit/avatar';
import { observer } from 'mobx-react';
import { userModel } from '../../../../../entities/user/UserModel';
import { Typography } from '../../../../../UIKit/Typography';

export const ProfileHeader: FC = observer(() => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyles(colors), [colors]);

    return (
        <View style={styles.container} >
            <Avatar size={60} name={userModel.user?.first_name} avatar={userModel.user?.avatar} />
            <View style={styles.textWrapper} >
                <Typography variant='h6' text={`${userModel.user?.first_name} ${userModel.user?.last_name}`} />
                <Typography variant='body2' text={userModel.user?.phone} />
            </View>
        </View>
    );
});
