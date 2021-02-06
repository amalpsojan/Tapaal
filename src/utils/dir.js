import React from 'react';
import RNFetchBlob from 'rn-fetch-blob';
import {isPermissionsGranted, readStorage, writeStorage} from '@utils/permissions';

const appName = 'Tapaal';

const DIR_PATH = RNFetchBlob.fs.dirs.SDCardDir + `/${appName}`;
const MEDIA_PATH = DIR_PATH + '/' + `Media`;

const IMG_PATH = MEDIA_PATH + '/' + `${appName} Images`;
const VIDEO_PATH = MEDIA_PATH + '/' + `${appName} Video`;
const DOC_PATH = MEDIA_PATH + '/' + `${appName} Documents`;

export const DirPath = {
    app: DIR_PATH,
    media: MEDIA_PATH,
    image: IMG_PATH,
    video: VIDEO_PATH,
    doc: DOC_PATH,
};

export const createAppDir = () => {
    requestPermissions(createAllDir);
};

const requestPermissions = async (_function) => {
    const readGranted = await readStorage();
    const writeGranted = await writeStorage();
    if (isPermissionsGranted(writeGranted) && isPermissionsGranted(readGranted) && _function) {
        _function();
    }
};

export const createImgDir = () => {
    requestPermissions(checkCreateImgDir);
};

export const createVideoDir = () => {
    requestPermissions(checkCreateVideoDir);
};

export const createDocDir = () => {
    requestPermissions(checkCreateDocDir);
};

const checkCreateImgDir = async () => {
    const checkImg = await checkDir(IMG_PATH);
    let isImgDir;

    if (!checkImg) {
        isImgDir = await createDir(IMG_PATH);
    }

    console.log('checkImg', checkImg);
    console.log('isImgDir', isImgDir);
};

const checkCreateVideoDir = async () => {
    const checkVideo = await checkDir(VIDEO_PATH);
    let isVideoDir;

    if (!checkVideo) {
        isVideoDir = await createDir(VIDEO_PATH);
    }

    console.log('checkVideo', checkVideo);
    console.log('isVideoDir', isVideoDir);
};

const checkCreateDocDir = async () => {
    const checkDoc = await checkDir(DOC_PATH);
    let isDocDir;

    if (!checkDoc) {
        isDocDir = await createDir(DOC_PATH);
    }

    console.log('checkDoc', checkDoc);
    console.log('isDocDir', isDocDir);
};

const createAllDir = () => {
    checkCreateImgDir();
    checkCreateVideoDir();
    checkCreateDocDir();
};

export const checkDir = async (path) => {
    return RNFetchBlob.fs.isDir(IMG_PATH);
};

export const createDir = async (path) => {
    return RNFetchBlob.fs.mkdir(path);
};
