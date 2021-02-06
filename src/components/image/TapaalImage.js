import React, {useEffect} from 'react';
import RNFetchBlob from 'rn-fetch-blob';
import {createAppDir} from '@utils/dir';

const DIR_PATH = RNFetchBlob.fs.dirs.SDCardDir;
const DIR_NAME = 'Tapaal';
const IMG_PATH = '/Media/Tapaal Images';
// const SAVE_PATH = DIR_PATH + DIR_NAME + IMG_PATH + 'images.jpg';
const SAVE_PATH = DIR_PATH + DIR_NAME + IMG_PATH;

export const TapaalImage = ({...props}: Object) => {
    useEffect(() => {
        createAppDir();
    }, []);

    return null;

};

