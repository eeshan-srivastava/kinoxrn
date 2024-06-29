import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import SafeArea from '../widgets/SafeArea';
import colorCode from '../../../resources/colors/colorCode';
import PageStateComponent from '../widgets/pageState/PageStateComponent';
import DefaultErrorView from '../widgets/view/DefaultErrorView';
import DefaultLoadingView from '../widgets/view/DefaultLoadingView';
import { MasonryFlashList } from '@shopify/flash-list';
import { PageStateType } from '../widgets/pageState/PageStateUtils';
import strings from '../../../resources/strings/strings';
import { PaginationStateType } from '../../utils/PaginationUtils';
import { PhotoItemBean, toPhotoItemBean } from '../bean/PhotoBean';
import { PhotosRC } from '../../../domain/model/photos/PhotosRC';
import { photoUseCase } from '../../../domain/usecase';
import { PhotoItemContent } from '../../../domain/model/photos/PhotosContent';
import { getApiErrorMessageFromError } from '../../../utils/AppUtils';
import PhotoItemView from '../common/PhotoItemView';
import normDimens from '../../../resources/dimens/normDimens';
import { ActivityIndicator } from 'react-native-paper';
import EditText from '../widgets/textInput/EditText';
import normFonts from '../../../resources/dimens/normFonts';
import TextView from '../widgets/textView/TextView';
import { SearchPhotosRC } from '../../../domain/model/photos/SearchPhotosRC';

interface Props {}

interface Route {
    params: {
        source?: string;
    };
}

const Surfing = (props: Props) => {
    const navigation: any = useNavigation();
    const route = useRoute() as Route;

    const init = async () => {};

    useEffect(() => {
        init();
    }, []);

    return <View style={styles.container6}></View>;
};

export default Surfing;

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
