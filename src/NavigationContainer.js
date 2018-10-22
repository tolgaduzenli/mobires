import React from 'react'
import { Platform } from 'react-native'
import { Navigation } from 'react-native-navigation'
import { registerScreens } from './screens'
import { strings } from './utils/i18n'
import Fonts from './utils/Fonts'
import { iconsMap, iconsLoaded } from './utils/IconHelper'

registerScreens()

export default class NavigationContainer extends React.Component {
    constructor(props) {
        super(props)
        iconsLoaded.then(() => {
            this.startApp();
        })
    }

    startApp = () => {
        const tabs = [
            {
                label: strings('screens.summary'),
                screen: 'MobiRes.Summary',
                icon: iconsMap['ios-list'],
                title: strings('screens.summary')
            },
            {
                label: strings('screens.experience'),
                screen: 'MobiRes.Experience',
                icon: iconsMap['briefcase'],
                title: strings('screens.experience')
            },
            {
                label: strings('screens.home'),
                screen: 'MobiRes.Home',
                icon: iconsMap['home'],
                title: strings('screens.home')
            },
            {
                label: strings('screens.projects'),
                screen: 'MobiRes.Projects',
                icon: iconsMap['ios-rocket'],
                title: strings('screens.projects')
            },
            {
                label: strings('screens.skills'),
                screen: 'MobiRes.Skills',
                icon: iconsMap['lightbulb-o'],
                title: strings('screens.skills')
            }
        ]
        // Start the app.
        Navigation.startTabBasedApp({
            tabs,
            animationType: Platform.OS === 'ios' ? 'slide-down' : 'fade', // FIXME: change the animation
            tabsStyle: {
                orientation: 'portrait',
                tabBarTextFontSize: 13,
                tabBarBackgroundColor: '#112535',
                tabBarButtonColor: '#ffffff',
                tabBarLabelColor: '#ffffff',
                tabBarSelectedButtonColor: '#E2AD56',
                tabBarSelectedLabelColor: '#E2AD56',
                tabBarTranslucent: false,
                initialTabIndex: 2, // for ios
                tabBarTextFontFamily: Fonts.Corpid,
                statusBarTextColorScheme: 'light'
            },
            appStyle: {
                navBarTextFontFamily: Fonts.Corpid,
                orientation: 'portrait',
                tabBarTextFontSize: 13,
                tabBarBackgroundColor: '#112535',
                navBarButtonColor: '#ffffff',
                tabBarButtonColor: '#ffffff',
                navBarTextColor: '#ffffff',
                tabBarSelectedButtonColor: '#E2AD56',
                navigationBarColor: '#112535',
                navBarBackgroundColor: '#112535',
                statusBarTextColorScheme: 'light',
                statusBarColor: '#112535',
                hideBackButtonTitle: false, // if `true` text on the back button will hidden
                initialTabIndex: 2, // for android
                // navBarBlur: false,
                // drawUnderNavBar: false,
                // navBarTransparent: true,
                forceTitlesDisplay: true, // on android display the title always
                tabBarTextFontFamily: Fonts.Corpid
            }
        })
    }
}

