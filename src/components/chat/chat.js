import React from 'react';
import {GiftedChat as RNGiftedChat} from 'react-native-gifted-chat';
import type ReactElement from 'react';
import {Image, StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
    chat: {

    },
    imageContainer:{
        borderRadius: 15,
        padding: 2,
    },
    image: {
        width: 200,
        height: 200,
        padding: 6,
        borderRadius: 15,
        resizeMode: "cover",
    }
});



const renderMessageImage = (props) => {
    return (
        <View
            style={[styles.imageContainer]}
        >
            <Image
                style={[styles.image]}
                source={{ uri: props.currentMessage.image }}
            />
        </View>
    );
};

export const TapaalChat = ({style, ...props}: Object): ReactElement<RNGiftedChat> => (
    <RNGiftedChat
        renderAvatarOnTop
        renderMessageImage={renderMessageImage}
        {...props} />
);
