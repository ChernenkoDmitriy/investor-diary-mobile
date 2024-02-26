import React, { FC, useMemo } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useUiContext } from '../../../../../UIProvider';
import { getStyles } from './styles';
import { observer } from 'mobx-react';

interface IProps {
    icon?: React.ReactNode;
    text: string;
    onPress?: () => void;
}

export const ProfileItem: FC<IProps> = observer(({ text, icon, onPress }) => {
    const { colors, t } = useUiContext();
    const styles = useMemo(() => getStyles(colors), [colors]);

    return (
        <TouchableOpacity style={styles.container} onPress={onPress} >
            <View style={styles.iconContainer}>
                {icon}
            </View>
            <View style={styles.textContainer} >
                <Text style={styles.title} numberOfLines={2} >{text}</Text>
            </View>
        </TouchableOpacity>
    );
});
