import React from 'react';
import {View} from 'react-native';
import {Image} from '@components/image/Image';

const styles = {
    imageContainer: {},
    image: {
        width: 200,
        height: 200,
    },
};

export const MessageImage = ({currentMessage}: Object) => {
    return (
        <View
            style={[styles.imageContainer]}
        >
            <Image
                resizeMode={'cover'}
                style={[styles.image]}
                source={currentMessage.image}
            />
        </View>
    );
};
