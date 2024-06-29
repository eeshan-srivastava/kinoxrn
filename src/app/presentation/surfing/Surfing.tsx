import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import colorCode from '../../../resources/colors/colorCode';
import normDimens from '../../../resources/dimens/normDimens';
import ImageView from '../widgets/imageView/ImageView';
import imageFile from '../../../resources/images/imageFile';
import TravelGuide from '../common/TravelGuide';
import TopSpots from './topSpots/TopSpots';
import TextView from '../widgets/textView/TextView';
import normFonts, { FontWeight } from '../../../resources/dimens/normFonts';
import strings from '../../../resources/strings/strings';

interface Props {}

interface Route {
    params: {
        source?: string;
    };
}

const Home = (props: Props) => {
    const navigation: any = useNavigation();
    const route = useRoute() as Route;

    const init = async () => {};

    useEffect(() => {
        init();
    }, []);

    return (
        <ScrollView style={styles.container1}>
            <View style={styles.container2}>
                <ImageView style={styles.container3} source={imageFile.IMG_SURFING} />
                <View style={styles.container4}>
                    <TextView style={styles.text1} fontWeight={FontWeight._400}>
                        {strings.surfing_desc}
                    </TextView>
                </View>
                <TopSpots />
                <TravelGuide style={styles.container5} />
            </View>
        </ScrollView>
    );
};

export default Home;

const styles = StyleSheet.create({
    container1: {
        backgroundColor: colorCode.white,
        flex: 1,
    },
    container2: { backgroundColor: colorCode.white, width: normDimens.SCREEN_WIDTH },
    container3: { width: normDimens.DIMEN_360, height: normDimens.DIMEN_240 },
    container4: { marginTop: normDimens.DIMEN_40, marginBottom: normDimens.DIMEN_0 },
    text1: {
        color: colorCode.primary_dark,
        marginLeft: normDimens.DIMEN_16,
        marginBottom: normDimens.DIMEN_24,
        fontSize: normFonts.FONT_16,
        lineHeight: normFonts.FONT_24,
    },
    container5: { paddingTop: normDimens.DIMEN_40 },
});
