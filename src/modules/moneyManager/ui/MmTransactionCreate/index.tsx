import React, { FC, useMemo } from 'react';
import { observer } from 'mobx-react';
import { useUiContext } from '../../../../UIProvider';
import { ScreenContainer } from '../../../../UIKit/screenContainer';
import { HeaderWithBackButton } from '../../../../UIKit/HeaderWithBackButton';
import { Button } from '../../../../UIKit/Button';
import { getStyle } from './styles';
import { useCreateMmTransaction } from '../../presenters/useCreateMmTransaction';
import { CalendarModal } from '../../../../UIKit/Calendar';
import { DatePickerButton } from '../../../investments/ui/components/datePickerButton';
import { View } from 'react-native';
import { CurrencyDropdown } from '../../../investments/ui/components/currencyDropdown';
import { AuthorizationInput } from '../../../authentication/ui/components/authorizationInput';
import { MmTransactionCategoriesDropDown } from '../components/mmTransactionCategoriesDropDown';
import { TransactionDirectionToggler } from '../components/transactionDirectionToggler';

export const MmTransactionCreateView: FC = observer(() => {
    const { t, colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { transaction, onSave, openCalendar, closeCalendar, onChoseDate, calendarVisible, onChangeValue, onChangeDirection } = useCreateMmTransaction();

    return (
        <ScreenContainer containerStyle={styles.container} headerComponent={<HeaderWithBackButton title={t('createTransaction')} />} >
            <TransactionDirectionToggler value={transaction.direction} onChange={onChangeDirection} />
            <View style={[styles.doubleViewInputs, { zIndex: 40 }]}>
                <AuthorizationInput keyboardType='numeric' containerStyle={styles.inputMarginRight} value={String(transaction?.amount)} onChangeText={(text: string) => { onChangeValue('amount', text) }} placeholder={t('amount')} />
                <CurrencyDropdown value={transaction?.currency} onChange={onChangeValue} />
            </View>
            <View style={styles.doubleViewInputs}>
                <MmTransactionCategoriesDropDown direction={transaction.direction} value={transaction.category_id} onChange={onChangeValue} />
                <DatePickerButton date={transaction.date} onPress={openCalendar} />
            </View>
            <CalendarModal visible={calendarVisible} onDayPress={onChoseDate} onBackdropPress={closeCalendar} />
            <Button containerStyle={styles.button} text={t('save')} onPress={onSave} />
        </ScreenContainer>
    );
});
