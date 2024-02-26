import React, { FC, useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useUiContext } from '../../../../../UIProvider';
import { getStyles } from './styles';
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { Avatar } from '../../../../../UIKit/avatar';
import { observer } from 'mobx-react';
import { userModel } from '../../../../../entities/user/UserModel';

export const ProfileHeader: FC = observer(() => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyles(colors), [colors]);
    const navigation = useNavigation<StackNavigationProp<any>>();

    const onEdit = () => {
        navigation.navigate('ProfileEditView');
    }

    return (
        <View style={styles.container} >
            <View style={styles.topContainer} >
                <TouchableOpacity style={styles.editButton} onPress={onEdit} >
                    <Text style={styles.edit} >{t('common.edit')}</Text>
                </TouchableOpacity>
            </View>
            <Avatar size={80} name={userModel.user?.first_name} avatar={userModel.user?.avatar} containerStyle={{ transform: [{ translateY: -30 }] }} />
            <View style={styles.textContainer} >
                <Text style={styles.title} numberOfLines={2} >{`${userModel.user?.first_name} ${userModel.user?.last_name}`}</Text>
            </View>
            <View style={styles.textContainer} >
                <Text style={styles.members} numberOfLines={1} >{userModel.user?.phone}</Text>
            </View>
        </View>
    );
});
