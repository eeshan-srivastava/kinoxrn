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
import CategoryItemView from './CategoryItemView';
import { CategoryItemBean } from '../../bean/CategoryBean';
import mainJson from '../../../../data/json/mainJson';
import strings from '../../../../resources/strings/strings';

interface Props {}

interface Route {}

const Categories = (props: Props) => {
    const [categories, setCategories] = useState<Array<CategoryItemBean>>(mainJson.categories);

    const init = async () => {};

    useEffect(() => {
        init();
    }, []);

    const onClickItem = (item: CategoryItemBean) => {};

    const renderItem = ({ item, index }: { item: CategoryItemBean; index: number }) => {
        return <CategoryItemView item={item} onClickItem={onClickItem} style={styles.container2} />;
    };

    const keyExtractor = (item: CategoryItemBean, index: any) => {
        return item.id.toString();
    };

    return (
        <View style={styles.container1}>
            <TextView style={styles.text1} fontWeight={FontWeight._700}>
                {strings.Categories}
            </TextView>
            <View>
                <FlatList
                    data={categories}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={keyExtractor}
                    style={{ marginLeft: normDimens.DIMEN_16 }}
                />
            </View>
        </View>
    );
};

export default Categories;

const styles = StyleSheet.create({
    container1: {
        backgroundColor: colorCode.primary_light,
        width: normDimens.SCREEN_WIDTH,
        paddingTop: normDimens.DIMEN_40,
        paddingBottom: normDimens.DIMEN_24,
    },
    text1: {
        color: colorCode.primary_dark,
        marginLeft: normDimens.DIMEN_16,
        marginBottom: normDimens.DIMEN_24,
        fontSize: normFonts.FONT_16,
        lineHeight: normFonts.FONT_20,
    },
    container2: { marginBottom: normDimens.DIMEN_8 },
});
