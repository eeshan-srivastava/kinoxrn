import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useEffect, useRef, useState } from 'react';
import { BackHandler, StyleSheet, View } from 'react-native';
import SafeArea from '../widgets/SafeArea';
import colorCode from '../../../resources/colors/colorCode';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
    BottomNavTabData,
    BottomTabActionType,
    MainTabs,
} from '../widgets/bottomNavigationBar/BottomNavUtils';
import imageFile from '../../../resources/images/imageFile';
import ReactBottomNavBar from '../widgets/bottomNavigationBar/reactNavigation/ReactBottomNavBar';
import normDimens from '../../../resources/dimens/normDimens';
import NavigationRoutes from '../../navigation/NavigationRoutes';
import BackPressUtils from '../../../utils/BackPressUtils';
import ColorUtils from '../../../resources/colors/ColorUtils';
import Home from '../home/Home';
import Surfing from '../surfing/Surfing';
import Kino from '../kino/Kino';
import ImageView from '../widgets/imageView/ImageView';
import Button from '../widgets/button/Button';
import normFonts, { FontWeight } from '../../../resources/dimens/normFonts';
import strings from '../../../resources/strings/strings';

interface Props {}

interface Route {
    params: {
        source?: string;
    };
}

const ReactNavTab = createBottomTabNavigator();

const Main = (props: Props) => {
    const navigation: any = useNavigation();
    const route = useRoute() as Route;
    const defaultTab = MainTabs.Home;
    const [selectedTab, setSelectedTab] = useState<string>(defaultTab);
    const activeTabs: any = useRef({ [selectedTab]: true });

    const onTabChange = (tabId: string, action: BottomTabActionType) => {
        if (tabId !== selectedTab) {
            activeTabs.current[tabId] = true;
            setSelectedTab(tabId);
        }
    };

    useEffect(() => {}, []);

    const onBackPress = () => {
        if (navigation.canGoBack()) {
            navigation.goBack();
        }
        return true;
    };

    useEffect(() => {
        BackHandler.addEventListener(BackPressUtils.HARDWARE_BACKPRESS, onBackPress);
        return () => BackHandler.removeEventListener(BackPressUtils.HARDWARE_BACKPRESS, onBackPress);
    }, []);

    const onBackPresssed = () => {
        onBackPress();
    };

    const tabs: Array<BottomNavTabData> = [
        {
            id: MainTabs.Home,
            label: MainTabs.Home,
            icon: imageFile.IC_HOME,
            activeTint: colorCode.primary,
            inactiveTint: ColorUtils.getAlphaColor({
                colorCode: colorCode.primary_dark,
                opacityPercent: 100,
            }),
        },
        {
            id: MainTabs.Surfing,
            label: MainTabs.Surfing,
            icon: imageFile.IC_SURFING,
            activeTint: colorCode.primary,
            inactiveTint: ColorUtils.getAlphaColor({
                colorCode: colorCode.primary_dark,
                opacityPercent: 100,
            }),
        },
        {
            id: MainTabs.Hula,
            label: MainTabs.Hula,
            icon: imageFile.IC_HULA,
            activeTint: colorCode.primary,
            inactiveTint: ColorUtils.getAlphaColor({
                colorCode: colorCode.primary_dark,
                opacityPercent: 100,
            }),
        },
        {
            id: MainTabs.Vulcano,
            label: MainTabs.Vulcano,
            icon: imageFile.IC_VULCANO,
            activeTint: colorCode.primary,
            inactiveTint: ColorUtils.getAlphaColor({
                colorCode: colorCode.primary_dark,
                opacityPercent: 100,
            }),
        },
    ];

    const tabBar = (props: any) => {
        return (
            <ReactBottomNavBar
                onTabChange={onTabChange}
                selectedTab={selectedTab}
                tabs={tabs}
                height={normDimens.DIMEN_72}
                state={props.state}
                descriptors={props.descriptors}
                navigation={props.navigation}
            />
        );
    };

    return (
        <SafeArea>
            <View style={styles.container2}>
                <ImageView
                    style={{ width: normDimens.DIMEN_94, height: normDimens.DIMEN_36 }}
                    source={imageFile.IC_ALOHA}
                />
            </View>
            <Button
                buttonText={strings.Book_a_trip}
                buttonActiveTextFontWeight={FontWeight._700}
                buttonActiveStyle={styles.container3}
                buttonActiveTextStyle={styles.text1}
                onClick={() => {}}
                dropShadow={true}
                activeGradient={[colorCode.primary, colorCode.primary, colorCode.primary]}
                style={styles.container4}
            />
            <ReactNavTab.Navigator tabBar={tabBar}>
                <ReactNavTab.Screen
                    name={NavigationRoutes.home}
                    component={Home}
                    options={{ headerShown: false }}
                />
                <ReactNavTab.Screen
                    name={NavigationRoutes.surfing}
                    component={Surfing}
                    options={{ headerShown: false }}
                />
                <ReactNavTab.Screen
                    name={NavigationRoutes.hula}
                    component={Kino}
                    options={{ headerShown: false }}
                />
                <ReactNavTab.Screen
                    name={NavigationRoutes.vulcano}
                    component={Kino}
                    options={{ headerShown: false }}
                />
            </ReactNavTab.Navigator>
        </SafeArea>
    );
};

export default Main;

const styles = StyleSheet.create({
    container1: {
        backgroundColor: colorCode.white,
        flex: 1,
    },
    container2: {
        width: normDimens.SCREEN_WIDTH,
        height: normDimens.DIMEN_80,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colorCode.white,
    },
    container3: {
        width: normDimens.DIMEN_328,
        height: normDimens.DIMEN_40,
        borderRadius: normDimens.DIMEN_8,
        borderWidth: normDimens.DIMEN_2,
        borderColor: colorCode.primary,
    },
    text1: {
        fontSize: normFonts.FONT_16,
        lineHeight: normFonts.FONT_20,
        color: colorCode.white,
    },
    container4: {
        position: 'absolute',
        bottom: normDimens.DIMEN_88,
        marginLeft: normDimens.DIMEN_16,
        zIndex: 100,
    },
});
