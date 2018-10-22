import { Navigation, ScreenVisibilityListener } from 'react-native-navigation';
import Summary from './Summary'
import Experience from './Experience'
import Projects from './Projects'
import Skills from './Skills'
import Home from './Home'

export const registerScreens = () => {
    Navigation.registerComponent('MobiRes.Home', () => Home);
    Navigation.registerComponent('MobiRes.Summary', () => Summary);
    Navigation.registerComponent('MobiRes.Experience', () => Experience);
    Navigation.registerComponent('MobiRes.Projects', () => Projects);
    Navigation.registerComponent('MobiRes.Skills', () => Skills);
}

export const registerScreenVisibilityListener = () => {
    new ScreenVisibilityListener({
        willAppear: ({ screen }) => console.log(`Displaying screen ${screen}`),
        didAppear: ({ screen, startTime, endTime, commandType }) =>
            // Keeping the console log for reference
            // console.log( 'screenVisibility', `Screen ${screen} displayed in ${endTime - startTime} millis [${commandType}]`),
            // Google Analytics tracking
            trackScreenWithRegisteredName(screen),

        willDisappear: ({ screen }) =>
            console.log(`Screen will disappear ${screen}`),
        didDisappear: ({ screen }) => console.log(`Screen disappeared ${screen}`)
    }).register()
}
