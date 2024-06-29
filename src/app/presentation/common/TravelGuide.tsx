import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import colorCode from '../../../resources/colors/colorCode';
import normDimens from '../../../resources/dimens/normDimens';
import TextView from '../widgets/textView/TextView';
import normFonts, { FontWeight } from '../../../resources/dimens/normFonts';
import ImageView from '../widgets/imageView/ImageView';
import imageFile from '../../../resources/images/imageFile';
import { ImageResizeMode } from '../widgets/imageView/ImageUtils';
import Button from '../widgets/button/Button';

interface Props {}

interface Route {}

const TravelGuide = (props: Props) => {
    return (
        <View
            style={{
                backgroundColor: colorCode.primary_light,
                width: normDimens.SCREEN_WIDTH,
                paddingTop: normDimens.DIMEN_8,
                paddingBottom: normDimens.DIMEN_72,
            }}>
            <TextView
                style={{
                    color: colorCode.primary_dark,
                    marginLeft: normDimens.DIMEN_16,
                    marginBottom: normDimens.DIMEN_24,
                    fontSize: normFonts.FONT_16,
                    lineHeight: normFonts.FONT_20,
                }}
                fontWeight={FontWeight._700}>
                {'Travel Guide'}
            </TextView>
            <View style={styles.container1}>
                <TextView
                    style={{
                        color: colorCode.primary_dark,
                        marginLeft: normDimens.DIMEN_24,
                        marginTop: normDimens.DIMEN_24,
                        fontSize: normFonts.FONT_24,
                        lineHeight: normFonts.FONT_24,
                    }}
                    fontWeight={FontWeight._700}>
                    {'Hadwin Malone'}
                </TextView>
                <TextView
                    style={{
                        color: colorCode.primary_dark,
                        marginLeft: normDimens.DIMEN_24,
                        marginTop: normDimens.DIMEN_12,
                        fontSize: normFonts.FONT_16,
                        lineHeight: normFonts.FONT_20,
                    }}
                    fontWeight={FontWeight._400}>
                    {'Guide since 2012'}
                </TextView>
                <Button
                    buttonText="Contact"
                    buttonActiveTextFontWeight={FontWeight._700}
                    buttonActiveStyle={{
                        width: normDimens.DIMEN_116,
                        height: normDimens.DIMEN_40,
                        borderRadius: normDimens.DIMEN_8,
                        borderWidth: normDimens.DIMEN_2,
                        borderColor: colorCode.primary,
                    }}
                    buttonActiveTextStyle={{
                        fontSize: normFonts.FONT_16,
                        lineHeight: normFonts.FONT_20,
                        color: colorCode.primary,
                    }}
                    onClick={() => {}}
                    dropShadow={false}
                    activeGradient={[colorCode.white, colorCode.white, colorCode.white]}
                    style={{
                        marginTop: normDimens.DIMEN_32,
                        marginLeft: normDimens.DIMEN_24,
                        alignSelf: 'flex-start',
                    }}
                />
                <ImageView
                    source={imageFile.IMG_USER as any}
                    style={{
                        width: normDimens.DIMEN_74,
                        height: normDimens.DIMEN_74,
                        position: 'absolute',
                        right: normDimens.DIMEN_24,
                        top: normDimens.DIMEN_24,
                        borderRadius: normDimens.DIMEN_74,
                    }}
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
});
