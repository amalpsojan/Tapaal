import FastImage from 'react-native-fast-image';

export const getFastImgSource = (src) => {
    let imgSource;

    if (typeof src === 'string') {
        // network image
        imgSource = {uri: src, priority: FastImage.priority.high};
    }
    if (typeof src === 'number') {
        // static image
        imgSource = src;
    }

    return imgSource;
};
