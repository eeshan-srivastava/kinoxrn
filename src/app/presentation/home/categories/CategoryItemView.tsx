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
import { CategoryItemBean } from '../../bean/CategoryBean';

interface Props {
    item: CategoryItemBean;
    style?: ViewStyle;
    onClickItem?: (item: CategoryItemBean) => void;
}

const CategoryItemView = (props: Props) => {
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
                    <TextView
                        style={{
                            color: colorCode.primary_dark,
                            marginLeft: normDimens.DIMEN_24,
                            fontSize: normFonts.FONT_16,
                            lineHeight: normFonts.FONT_20,
                            alignSelf: 'center',
                        }}
                        fontWeight={FontWeight._400}>
                        {item.title}
                    </TextView>
                    <ImageView
                        source={imageFile.IC_BACK_2 as any}
                        style={{
                            width: normDimens.DIMEN_16,
                            height: normDimens.DIMEN_16,
                            alignSelf: 'center',
                            marginRight: normDimens.DIMEN_24,
                        }}
                        resizeMode={ImageResizeMode.contain}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default CategoryItemView;

const styles = StyleSheet.create({
    container1: {
        display: 'flex',
        flexDirection: 'column',
        width: normDimens.DIMEN_328,
        height: normDimens.DIMEN_68,
        backgroundColor: colorCode.white,
        borderRadius: normDimens.DIMEN_8,
        overflow: 'hidden',
        // shadowColor: colorCode.primary,
        // shadowOffset: { width: 0, height: 8 },
        // shadowOpacity: 0.2,
        // shadowRadius: 4,
        // elevation: 5,
    },
    container2: {
        display: 'flex',
        flexDirection: 'row',
        width: normDimens.DIMEN_328,
        height: normDimens.DIMEN_68,
        backgroundColor: colorCode.white,
        borderRadius: normDimens.DIMEN_8,
        overflow: 'hidden',
        justifyContent: 'space-between',
    },
});
