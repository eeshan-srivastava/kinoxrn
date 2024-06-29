import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import colorCode from '../../../../resources/colors/colorCode';
import normDimens from '../../../../resources/dimens/normDimens';
import TextView from '../../widgets/textView/TextView';
import normFonts, { FontWeight } from '../../../../resources/dimens/normFonts';
import { CategoryItemBean } from '../../bean/CategoryBean';
import { TopSpotItemBean } from '../../bean/TopSpotBean';
import TopSpotItemView from './TopSpotItemView';
import mainJson from '../../../../data/json/mainJson';
import strings from '../../../../resources/strings/strings';

interface Props {}

const TopSpots = (props: Props) => {
    const [categories, setCategories] = useState<Array<TopSpotItemBean>>(mainJson.top_spots);

    const init = async () => {};

    useEffect(() => {
        init();
    }, []);

    const onClickItem = (item: TopSpotItemBean) => {};

    const renderItem = ({ item, index }: { item: TopSpotItemBean; index: number }) => {
        return <TopSpotItemView item={item} onClickItem={onClickItem} style={styles.container3} />;
    };

    const keyExtractor = (item: CategoryItemBean, index: any) => {
        return item.id.toString();
    };

    return (
        <View style={styles.container1}>
            <TextView style={styles.text1} fontWeight={FontWeight._700}>
                {strings.Top_spots}
            </TextView>
            <View>
                <FlatList
                    data={categories}
                    renderItem={renderItem}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={keyExtractor}
                    style={styles.container2}
                />
            </View>
        </View>
    );
};

export default TopSpots;

const styles = StyleSheet.create({
    container1: {
        backgroundColor: colorCode.white,
        width: normDimens.SCREEN_WIDTH,
        paddingTop: normDimens.DIMEN_20,
        paddingBottom: normDimens.DIMEN_72,
    },
    text1: {
        color: colorCode.primary_dark,
        marginLeft: normDimens.DIMEN_16,
        marginBottom: normDimens.DIMEN_24,
        fontSize: normFonts.FONT_16,
        lineHeight: normFonts.FONT_20,
    },
    container2: { marginLeft: normDimens.DIMEN_0 },
    container3: { marginBottom: normDimens.DIMEN_8 },
});
