import React from 'react';
import {PermissionsAndroid} from 'react-native';

export const readStorage = async () => {
    return PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
            title: 'Permission title',
            message:
                'Permission message',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
        },
    );
};

export const writeStorage = async () => {
    return PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
        {
            title: 'Permission title',
            message:
                'Permission message',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
        },
    );
};

export const isPermissionsGranted = (value) => {
    let isGranted = false;
    if (value === PermissionsAndroid.RESULTS.GRANTED) {
        isGranted = true;
    }
    return isGranted;
};
