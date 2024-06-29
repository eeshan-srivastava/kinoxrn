import React from 'react';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { HighlighItemBean } from '../../bean/HighlightBean';
import ImageView from '../../widgets/imageView/ImageView';
import { ImageResizeMode } from '../../widgets/imageView/ImageUtils';
import normDimens from '../../../../resources/dimens/normDimens';
import ColorUtils from '../../../../resources/colors/ColorUtils';
import colorCode from '../../../../resources/colors/colorCode';
import normFonts, { FontWeight } from '../../../../resources/dimens/normFonts';
import TextView from '../../widgets/textView/TextView';
import imageFile from '../../../../resources/images/imageFile';

interface Props {
    item: HighlighItemBean;
    style?: ViewStyle;
    onClickItem?: (item: HighlighItemBean) => void;
}

const HighlightItemView = (props: Props) => {
    const { item, style, onClickItem = () => {} } = props;

    return (
        <View style={{ ...styles.container1, ...style }}>
            <TouchableOpacity
                style={styles.container2}
                onPress={() => {
                    onClickItem(item);
                }}
                activeOpacity={0.7}>
                <View style={styles.container2} pointerEvents={'none'}>
                    <ImageView
                        source={item.image as any}
                        style={{
                            width: normDimens.DIMEN_304,
                            height: normDimens.DIMEN_160 + normDimens.DIMEN_10,
                        }}
                        resizeMode={ImageResizeMode.contain}
                    />
                    <TextView
                        style={{
                            color: colorCode.primary,
                            marginLeft: normDimens.DIMEN_24,
                            marginBottom: normDimens.DIMEN_24,
                            fontSize: normFonts.FONT_24,
                            lineHeight: normFonts.FONT_24,
                            marginTop: normDimens.DIMEN_20,
                        }}
                        fontWeight={FontWeight._700}>
                        {item.title}
                    </TextView>
                    <TextView
                        style={{
                            color: colorCode.primary_dark,
                            marginLeft: normDimens.DIMEN_24,
                            fontSize: normFonts.FONT_16,
                            lineHeight: normFonts.FONT_20,
                            marginTop: -normDimens.DIMEN_8,
                        }}
                        fontWeight={FontWeight._400}>
                        {item.description}
                    </TextView>
                    <ImageView
                        source={imageFile.IC_BACK as any}
                        style={{
                            width: normDimens.DIMEN_40,
                            height: normDimens.DIMEN_40,
                            alignSelf: 'flex-end',
                            marginRight: normDimens.DIMEN_24,
                            marginTop: normDimens.DIMEN_4,
                        }}
                        resizeMode={ImageResizeMode.contain}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default HighlightItemView;

const styles = StyleSheet.create({
    container1: {
        display: 'flex',
        flexDirection: 'column',
        width: normDimens.DIMEN_304,
        height: normDimens.DIMEN_340,
        backgroundColor: colorCode.white,
        borderRadius: normDimens.DIMEN_8,
        overflow: 'hidden',
        shadowColor: colorCode.primary,
        shadowOffset: { width: 0, height: 8 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    container2: {
        display: 'flex',
        flexDirection: 'column',
        width: normDimens.DIMEN_304,
        height: normDimens.DIMEN_340,
        backgroundColor: colorCode.white,
        borderRadius: normDimens.DIMEN_8,
        overflow: 'hidden',
    },
});
