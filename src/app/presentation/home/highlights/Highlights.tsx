import React, { useEffect, useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import colorCode from '../../../../resources/colors/colorCode';
import normDimens from '../../../../resources/dimens/normDimens';
import TextView from '../../widgets/textView/TextView';
import { HighlighItemBean } from '../../bean/HighlightBean';
import HighlightItemView from './HighlightItemView';
import normFonts, { FontWeight } from '../../../../resources/dimens/normFonts';
import strings from '../../../../resources/strings/strings';
import mainJson from '../../../../data/json/mainJson';

interface Props {}

const Highlights = (props: Props) => {
    const [highlights, setHighlights] = useState<Array<HighlighItemBean>>(mainJson.highlights);

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
                style={index === highlights.length - 1 ? styles.container3 : styles.container4}
            />
        );
    };

    const keyExtractor = (item: HighlighItemBean, index: any) => {
        return item.id.toString();
    };

    return (
        <View style={styles.container1}>
            <TextView style={styles.text1} fontWeight={FontWeight._700}>
                {strings.Highlights}
            </TextView>
            <View>
                <FlatList
                    data={highlights}
                    renderItem={renderItem}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={keyExtractor}
                    style={styles.container2}
                />
            </View>
        </View>
    );
};

export default Highlights;

const styles = StyleSheet.create({
    container1: {
        backgroundColor: colorCode.white,
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
    container2: { height: normDimens.DIMEN_340 + normDimens.DIMEN_16 },
    container3: { marginLeft: normDimens.DIMEN_16, marginRight: normDimens.DIMEN_16 },
    container4: { marginLeft: normDimens.DIMEN_16 },
});
