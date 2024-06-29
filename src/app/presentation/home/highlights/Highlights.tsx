import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView, StyleSheet, View } from 'react-native';
import colorCode from '../../../../resources/colors/colorCode';
import normDimens from '../../../../resources/dimens/normDimens';
import ImageView from '../../widgets/imageView/ImageView';
import TextView from '../../widgets/textView/TextView';
import imageFile from '../../../../resources/images/imageFile';
import { FlashList } from '@shopify/flash-list';
import { HighlighItemBean } from '../../bean/HighlightBean';
import HighlightItemView from './HighlightItemView';
import normFonts, { FontWeight } from '../../../../resources/dimens/normFonts';

interface Props {}

interface Route {}

const Highlights = (props: Props) => {
    const [highlights, setHighlights] = useState<Array<HighlighItemBean>>([
        {
            id: '1',
            image: imageFile.IMG_HIGHLIGHT_1,
            title: 'Surfing',
            description: 'Best Hawaiian islands for surfing.',
            deeplink: '',
        },
        {
            id: '2',
            image: imageFile.IMG_HIGHLIGHT_2,
            title: 'Hula',
            description: 'Try it yourself.',
            deeplink: '',
        },
        {
            id: '3',
            image: imageFile.IMG_HIGHLIGHT_3,
            title: 'Vulcano',
            description: 'Volcanic conditions can change at any time.',
            deeplink: '',
        },
    ]);

    const init = async () => {};

    useEffect(() => {
        init();
    }, []);

    const onClickItem = (item: HighlighItemBean) => {};

    const renderItem = ({ item, index }: { item: HighlighItemBean; index: number }) => {
        return (
            <HighlightItemView
                item={item}
                onClickItem={onClickItem}
                style={
                    index === highlights.length - 1
                        ? { marginLeft: normDimens.DIMEN_16, marginRight: normDimens.DIMEN_16 }
                        : { marginLeft: normDimens.DIMEN_16 }
                }
            />
        );
    };

    const keyExtractor = (item: HighlighItemBean, index: any) => {
        return item.id.toString();
    };

    return (
        <View
            style={{
                backgroundColor: colorCode.white,
                width: normDimens.SCREEN_WIDTH,
                paddingTop: normDimens.DIMEN_40,
                paddingBottom: normDimens.DIMEN_24,
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
                {'Highlights'}
            </TextView>
            <View style={{}}>
                <FlatList
                    data={highlights}
                    renderItem={renderItem}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={keyExtractor}
                    style={{ height: normDimens.DIMEN_340 + normDimens.DIMEN_16 }}
                />
            </View>
        </View>
    );
};

export default Highlights;

const styles = StyleSheet.create({
    container1: {
        backgroundColor: colorCode.white,
        flex: 1,
    },
});
