import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import colorCode from '../../../resources/colors/colorCode';
import normDimens from '../../../resources/dimens/normDimens';
import ImageView from '../widgets/imageView/ImageView';
import imageFile from '../../../resources/images/imageFile';
import Highlights from './highlights/Highlights';
import Categories from './categories/Categories';
import TravelGuide from '../common/TravelGuide';

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
                <ImageView style={styles.container3} source={imageFile.IMG_HOME} />
                <Highlights />
                <Categories />
                <TravelGuide />
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
    container3: { width: normDimens.DIMEN_360, height: normDimens.DIMEN_480 },
});
