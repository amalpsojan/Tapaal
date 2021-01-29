import React from 'react';
import {Composer, GiftedChat as RNGiftedChat} from 'react-native-gifted-chat';
import type ReactElement from 'react';
import {StyleSheet, View} from 'react-native';
import {Image} from '../image/Image';

const styles = StyleSheet.create({
    chat: {},
    imageContainer: {
        borderRadius: 15,
        padding: 2,
    },
    image: {
        width: 200,
        height: 200,
        padding: 6,
        borderRadius: 15,
    },
});


const renderMessageImage = (Props) => {
    return (
        <View
            style={[styles.imageContainer]}
        >
            <Image
                resizeMode={'contain'}
                style={[styles.image]}
                source={Props.currentMessage.image}
            />
        </View>
    );
};

type OnImageChangeCallback = (event: { nativeEvent: { uri: string } }) => void;
const onImageChange: OnImageChangeCallback = ({nativeEvent}) => {
    const {uri} = nativeEvent;
    console.log("uri: ",uri);
    // upload gif using local uri to somewhere publicly accessible (eg. firebase storage)
    // send a new message with message.image = <publicDownloadUrl>
};

const renderComposer = props => <Composer {...props} textInputProps={{onImageChange}}/>;

export const TapaalChat = ({style, ...props}: Object): ReactElement<RNGiftedChat> => (
    <RNGiftedChat
        renderComposer={renderComposer}
        renderMessageImage={renderMessageImage}
        {...props} />
);
