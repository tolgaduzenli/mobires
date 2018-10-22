import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';


const icons = {
    "home": [30, "#ffffff", FontAwesome],
    "ios-list": [27, "#ffffff", Ionicons],
    "ios-rocket": [30, "#ffffff", Ionicons],
    "briefcase": [27, "#ffffff", FontAwesome],
    "lightbulb-o": [30, "#ffffff", FontAwesome],
};

let iconsMap = {};
let iconsLoaded = new Promise((resolve, reject) => {
    return new Promise.all(
        Object.keys(icons).map(iconName =>
            icons[iconName][2].getImageSource(
                iconName,
                icons[iconName][0],
                icons[iconName][1]
            ))
    ).then(sources => {
        Object.keys(icons)
            .forEach((iconName, idx) => iconsMap[iconName] = sources[idx]);
        resolve(true);
    })
});

export {
    iconsMap,
    iconsLoaded
};