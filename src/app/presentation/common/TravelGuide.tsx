import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, View, ViewStyle } from 'react-native';
import colorCode from '../../../resources/colors/colorCode';
import normDimens from '../../../resources/dimens/normDimens';
import TextView from '../widgets/textView/TextView';
import normFonts, { FontWeight } from '../../../resources/dimens/normFonts';
import ImageView from '../widgets/imageView/ImageView';
import imageFile from '../../../resources/images/imageFile';
import { ImageResizeMode } from '../widgets/imageView/ImageUtils';
import Button from '../widgets/button/Button';
import strings from '../../../resources/strings/strings';

interface Props {
    style?: ViewStyle;
}

interface Route {}

const TravelGuide = (props: Props) => {
    const { style } = props;
    return (
        <View style={{ ...styles.container2, ...style }}>
            <TextView style={styles.text1} fontWeight={FontWeight._700}>
                {strings.Travel_Guide}
            </TextView>
            <View style={styles.container1}>
                <TextView style={styles.text4} fontWeight={FontWeight._700}>
                    {strings.Hadwin_Malone}
                </TextView>
                <TextView style={styles.text2} fontWeight={FontWeight._400}>
                    {strings.Guide_since_2012}
                </TextView>
                <Button
                    buttonText={strings.Contact}
                    buttonActiveTextFontWeight={FontWeight._700}
                    buttonActiveStyle={styles.container3}
                    buttonActiveTextStyle={styles.text3}
                    onClick={() => {}}
                    dropShadow={false}
                    activeGradient={[colorCode.white, colorCode.white, colorCode.white]}
                    style={styles.container4}
                />
                <ImageView
                    source={imageFile.IMG_USER as any}
                    style={styles.container5}
                    resizeMode={ImageResizeMode.cover}
                />
            </View>
        </View>
    );
};

export default TravelGuide;

const styles = StyleSheet.create({
    container1: {
        display: 'flex',
        flexDirection: 'column',
        width: normDimens.DIMEN_328,
        height: normDimens.DIMEN_176,
        backgroundColor: colorCode.white,
        borderRadius: normDimens.DIMEN_8,
        overflow: 'hidden',
        shadowColor: colorCode.primary,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.2,
        shadowRadius: 8,
        elevation: 3,
        marginLeft: normDimens.DIMEN_16,
    },
    container2: {
        backgroundColor: colorCode.primary_light,
        width: normDimens.SCREEN_WIDTH,
        paddingTop: normDimens.DIMEN_8,
        paddingBottom: normDimens.DIMEN_72,
    },
    text1: {
        color: colorCode.primary_dark,
        marginLeft: normDimens.DIMEN_16,
        marginBottom: normDimens.DIMEN_24,
        fontSize: normFonts.FONT_16,
        lineHeight: normFonts.FONT_20,
    },
    text2: {
        color: colorCode.primary_dark,
        marginLeft: normDimens.DIMEN_24,
        marginTop: normDimens.DIMEN_12,
        fontSize: normFonts.FONT_16,
        lineHeight: normFonts.FONT_20,
    },
    container3: {
        width: normDimens.DIMEN_116,
        height: normDimens.DIMEN_40,
        borderRadius: normDimens.DIMEN_8,
        borderWidth: normDimens.DIMEN_2,
        borderColor: colorCode.primary,
    },
    text3: {
        fontSize: normFonts.FONT_16,
        lineHeight: normFonts.FONT_20,
        color: colorCode.primary,
    },
    container4: {
        marginTop: normDimens.DIMEN_32,
        marginLeft: normDimens.DIMEN_24,
        alignSelf: 'flex-start',
    },
    container5: {
        width: normDimens.DIMEN_74,
        height: normDimens.DIMEN_74,
        position: 'absolute',
        right: normDimens.DIMEN_24,
        top: normDimens.DIMEN_24,
        borderRadius: normDimens.DIMEN_74,
    },
    text4: {
        color: colorCode.primary_dark,
        marginLeft: normDimens.DIMEN_24,
        marginTop: normDimens.DIMEN_24,
        fontSize: normFonts.FONT_24,
        lineHeight: normFonts.FONT_24,
    },
});
