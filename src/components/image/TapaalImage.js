import React, {useEffect} from 'react';
import {createImgDir} from '@utils/dir';

export const TapaalImage = ({...props}: Object) => {
    useEffect(() => {
        createImgDir();
    }, []);

    return null;

};

