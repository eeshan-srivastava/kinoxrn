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
import normFonts, { FontWeight } from '../../../../resources/dimens/normFonts';
import { CategoryItemBean } from '../../bean/CategoryBean';
import { TopSpotItemBean } from '../../bean/TopSpotBean';
import TopSpotItemView from './TopSpotItemView';

interface Props {}

interface Route {}

const TopSpots = (props: Props) => {
    const [categories, setCategories] = useState<Array<TopSpotItemBean>>([
        {
            id: '1',
            title: 'Maui',
            deeplink: '',
            image:imageFile.IMG_SPOT_1
        },
        {
            id: '2',
            title: 'Kauai',
            deeplink: '',
            image:imageFile.IMG_SPOT_2
        },
        {
            id: '3',
            title: 'Honolulu',
            deeplink: '',
            image:imageFile.IMG_SPOT_3
        },
    ]);

    const init = async () => {};

    useEffect(() => {
        init();
    }, []);

    const onClickItem = (item: TopSpotItemBean) => {};

    const renderItem = ({ item, index }: { item: TopSpotItemBean; index: number }) => {
        return (
            <TopSpotItemView
                item={item}
                onClickItem={onClickItem}
                style={{ marginBottom: normDimens.DIMEN_8 }}
            />
        );
    };

    const keyExtractor = (item: CategoryItemBean, index: any) => {
        return item.id.toString();
    };

    return (
        <View
            style={{
                backgroundColor: colorCode.white,
                width: normDimens.SCREEN_WIDTH,
                paddingTop: normDimens.DIMEN_20,
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
                {'Top spots'}
            </TextView>
            <View style={{}}>
                <FlatList
                    data={categories}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={keyExtractor}
                    style={{ marginLeft: normDimens.DIMEN_0 }}
                />
            </View>
        </View>
    );
};

export default TopSpots;

const styles = StyleSheet.create({
    container1: {
        backgroundColor: colorCode.white,
        flex: 1,
    },
});
