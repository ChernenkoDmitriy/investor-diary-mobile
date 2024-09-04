import React, { FC, useMemo } from 'react';
import { View } from 'react-native';
import { useUiContext } from '../../../../../UIProvider';
import { getStyles } from './styles';
import { Avatar } from '../../../../../UIKit/avatar';
import { observer } from 'mobx-react';
import { userModel } from '../../../../../entities/user/UserModel';
import { Typography } from '../../../../../UIKit/Typography';
import { scaleVertical } from '../../../../../utils';

export const ProfileHeader: FC = observer(() => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyles(colors), [colors]);

    console.log('userModel.user', userModel.user);

    return (
        <View style={styles.container} >
            <Avatar size={scaleVertical(80)} name={userModel.user?.first_name} avatar={userModel.user?.image} />
            <View style={styles.textWrapper} >
                <Typography variant='h5' style={styles.text} text={`${userModel.user?.first_name} ${userModel.user?.last_name}`} />
                <Typography variant='body1' style={styles.text} text={userModel.user?.phone} />
            </View>
        </View>
    );
});
