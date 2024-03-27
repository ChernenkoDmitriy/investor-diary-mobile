import React, { FC, memo, useMemo } from 'react';
import { TouchableOpacity, View } from "react-native";
import { useUiContext } from '../../../../../UIProvider';
import { getStyle } from './styles';
import { EditIcon } from '../../../../../assets/icons/EditIcon';
import { DeleteIcon } from '../../../../../assets/icons/DeleteIcon';

interface IProps {
    onDelete: () => void;
    onEdit: () => void;
}

export const MmTransactionHeaderButtons: FC<IProps> = memo(({ onEdit, onDelete }) => {
    const { colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);

    return (
        <View style={styles.container} >
            <TouchableOpacity style={styles.button} onPress={onEdit}>
                <EditIcon color={colors.icon_strong} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={onDelete}>
                <DeleteIcon color={colors.warning} />
            </TouchableOpacity>
        </View>
    );
})