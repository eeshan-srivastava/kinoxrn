import React from 'react';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import ImageView from '../../widgets/imageView/ImageView';
import { ImageResizeMode } from '../../widgets/imageView/ImageUtils';
import normDimens from '../../../../resources/dimens/normDimens';
import colorCode from '../../../../resources/colors/colorCode';
import normFonts, { FontWeight } from '../../../../resources/dimens/normFonts';
import TextView from '../../widgets/textView/TextView';
import { TopSpotItemBean } from '../../bean/TopSpotBean';
import strings from '../../../../resources/strings/strings';

interface Props {
    item: TopSpotItemBean;
    style?: ViewStyle;
    onClickItem?: (item: TopSpotItemBean) => void;
}

const TopSpotItemView = (props: Props) => {
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
                    <TextView style={styles.text1} fontWeight={FontWeight._700}>
                        {item.id + strings.dot + strings.space + item.title}
                    </TextView>
                    <ImageView
                        source={item.image as any}
                        style={styles.container3}
                        resizeMode={ImageResizeMode.contain}
                    />
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default TopSpotItemView;

const styles = StyleSheet.create({
    container1: {
        display: 'flex',
        flexDirection: 'column',
        width: normDimens.DIMEN_328,
        height: normDimens.DIMEN_63,
        marginBottom: normDimens.DIMEN_16,
        marginLeft: normDimens.DIMEN_16,
        backgroundColor: colorCode.white,
        borderRadius: normDimens.DIMEN_8,
        overflow: 'hidden',
        shadowColor: colorCode.primary,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    container2: {
        display: 'flex',
        flexDirection: 'row',
        width: normDimens.DIMEN_328,
        height: normDimens.DIMEN_63,
        backgroundColor: colorCode.white,
        borderRadius: normDimens.DIMEN_8,
        overflow: 'hidden',
        justifyContent: 'space-between',
    },
    text1: {
        color: colorCode.primary,
        marginLeft: normDimens.DIMEN_24,
        fontSize: normFonts.FONT_16,
        lineHeight: normFonts.FONT_20,
        alignSelf: 'center',
    },
    container3: {
        width: normDimens.DIMEN_120,
        height: normDimens.DIMEN_63,
        alignSelf: 'center',
        marginRight: normDimens.DIMEN_0,
    },
});
