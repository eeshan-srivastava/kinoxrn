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
            <View style={{ backgroundColor: colorCode.white, width: normDimens.SCREEN_WIDTH }}>
                <ImageView
                    style={{ width: normDimens.DIMEN_360, height: normDimens.DIMEN_240 }}
                    source={imageFile.IMG_SURFING}
                />
                <View style={{marginTop: normDimens.DIMEN_40, marginBottom: normDimens.DIMEN_0}}>
                    <TextView
                        style={{
                            color: colorCode.primary_dark,
                            marginLeft: normDimens.DIMEN_16,
                            marginBottom: normDimens.DIMEN_24,
                            fontSize: normFonts.FONT_16,
                            lineHeight: normFonts.FONT_24,
                        }}
                        fontWeight={FontWeight._400}>
                        {'Hawaii is the capital of modern surfing. This group of Pacific islands gets swell from all directions, so there are plenty of pristine surf spots for all.'}
                    </TextView>
                </View>
                <TopSpots/>
                <TravelGuide style={{paddingTop: normDimens.DIMEN_40,}}/>
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
    container2: {
        marginVertical: normDimens.DIMEN_16,
        width: normDimens.DIMEN_32,
        height: normDimens.DIMEN_32,
    },
    container3: {
        width: normDimens.DIMEN_32,
        height: normDimens.DIMEN_32,
        marginVertical: normDimens.DIMEN_16,
    },
    container5: {
        width: normDimens.SCREEN_WIDTH,
        height: normDimens.DIMEN_80,
        alignItems: 'center',
    },
});
