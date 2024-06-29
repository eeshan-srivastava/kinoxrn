import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import colorCode from '../../../resources/colors/colorCode';
import normDimens from '../../../resources/dimens/normDimens';
import TextView from '../widgets/textView/TextView';

interface Props {}

interface Route {
    params: {
        source?: string;
    };
}

const Kino = (props: Props) => {
    const navigation: any = useNavigation();
    const route = useRoute() as Route;
    const {} = props;

    const init = async () => {};

    useEffect(() => {
        init();
    }, []);

    return (
        <View style={styles.container6}>
            <TextView style={{ color: colorCode.black }}>{'EMPTY SCREEN'}</TextView>
        </View>
    );
};

export default Kino;

const styles = StyleSheet.create({
    container1: {
        backgroundColor: colorCode.black,
        flex: 1,
    },
    container2: {
        marginVertical: normDimens.DIMEN_16,
        width: normDimens.DIMEN_32,
        height: normDimens.DIMEN_32,
    },
    container3: {
        width: normDimens.DIMEN_32,
        height: normDimens.DIMEN_32,
        marginVertical: normDimens.DIMEN_16,
    },
    container5: {
        width: normDimens.SCREEN_WIDTH,
        height: normDimens.DIMEN_80,
        alignItems: 'center',
    },
    container6: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colorCode.white,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container7: {
        flexDirection: 'row',
        width: '100%',
        height: normDimens.DIMEN_56,
    },
    container8: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: normDimens.DIMEN_40,
        height: normDimens.DIMEN_36,
        width: normDimens.DIMEN_80,
        backgroundColor: colorCode.blue,
        alignSelf: 'center',
        marginEnd: normDimens.DIMEN_8,
    },
    text1: {
        color: colorCode.white,
    },
    container9: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: colorCode.black,
    },
});
