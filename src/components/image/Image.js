import React from 'react';
import type ReactElement from 'react';
import RNImage from 'react-native-fast-image';
import PropTypes from 'prop-types';
import {ViewPropTypes, StyleSheet} from 'react-native';

import {getFastImgSource} from '@utils/helper';

const defaultSize = {
    width: 40,
    height: 40,
};

const styles = StyleSheet.create({
    defaultSize: {
        ...defaultSize,
    },
    default: {
        ...defaultSize,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export const Image = ({style, source, resizeMode, ...props}: Object): ReactElement<RNImage> => (
    <RNImage
        style={[style]}
        resizeMode={RNImage.resizeMode[resizeMode]}
        source={getFastImgSource(source)}
        {...props} />
);

Image.propTypes = {
    resizeMode: PropTypes.oneOf(['contain', 'cover', 'stretch', 'center']),
    source: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]),
    style: ViewPropTypes.style,
};

Image.defaultProps = {
    resizeMode: 'contain',
    style: styles.default,
};

