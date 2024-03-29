import React, { FC, useMemo } from 'react';
import { observer } from 'mobx-react';
import { useUiContext } from '../../../../UIProvider';
import { ScreenContainer } from '../../../../UIKit/screenContainer';
import { AuthorizationInput } from '../../../authentication/ui/components/authorizationInput';
import { HeaderWithBackButton } from '../../../../UIKit/HeaderWithBackButton';
import { getStyle } from './styles';
import { useCreateInvestment } from '../../presenters/useCreateInvestment';
import { View } from 'react-native';
import { CalendarModal } from '../../../../UIKit/Calendar';
import { DatePickerButton } from '../components/datePickerButton';
import { Button } from '../../../../UIKit/Button';
import { SectorDropdown } from '../components/sectorDropdown';
import { InvestTypeDropdown } from '../components/investTypeDropdown';
import { CurrencyDropdown } from '../components/currencyDropdown';

export const InvestmentsCreateView: FC = observer(() => {
    const { t, colors } = useUiContext();
    const styles = useMemo(() => getStyle(colors), [colors]);
    const { investment, onChangeValue, calendarVisible, openCalendar, closeCalendar, onChoseDate, onSave } = useCreateInvestment();

    return (
        <ScreenContainer scrollEnabled isKeyboardAvoiding containerStyle={styles.container} headerComponent={<HeaderWithBackButton title={t('createInvestments')} />} >
            <AuthorizationInput value={investment?.name} onChangeText={(text: string) => { onChangeValue('name', text) }} placeholder={t('name')} />
            <View style={styles.doubleViewInputs}>
                <AuthorizationInput autoCapitalize='characters' containerStyle={styles.inputMarginRight} value={investment?.ticker} onChangeText={(text: string) => { onChangeValue('ticker', text) }} placeholder={t('ticker')} />
                <CurrencyDropdown value={investment?.currency} onChange={onChangeValue} />
            </View>
            <View style={styles.tripleViewInputs}>
                <AuthorizationInput keyboardType='numeric' containerStyle={styles.inputMarginRight} value={String(investment?.enteringPrice)} onChangeText={(text: string) => { onChangeValue('enteringPrice', text) }} placeholder={t('enteringPrice')} />
                <AuthorizationInput keyboardType='numeric' containerStyle={styles.inputMarginRight} value={String(investment?.amount)} onChangeText={(text: string) => { onChangeValue('amount', text) }} placeholder={t('amount')} />
                <DatePickerButton date={investment.enteringDate} onPress={openCalendar} />
            </View>
            <InvestTypeDropdown value={investment?.type} onChange={onChangeValue} />
            <SectorDropdown value={investment?.sector} onChange={onChangeValue} />
            <AuthorizationInput value={investment?.broker} onChangeText={(text: string) => { onChangeValue('broker', text) }} placeholder={t('broker')} />
            <AuthorizationInput value={investment?.comment} onChangeText={(text: string) => { onChangeValue('comment', text) }} placeholder={t('comment')} />
            <CalendarModal visible={calendarVisible} onDayPress={onChoseDate} onBackdropPress={closeCalendar} />
            <Button containerStyle={styles.button} text={t('save')} onPress={onSave} />
        </ScreenContainer>
    );
});
