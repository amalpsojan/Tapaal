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

export const isValidURL=(str)=> {
    const pattern = new RegExp('^(https?:\\/\\/)?' + // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
        '(\\#[-a-z\\d_]*)?$', 'i'); // fragment locator
    return !!pattern.test(str);
}
