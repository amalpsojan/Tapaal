import React from 'react';
import {Composer, Bubble, GiftedChat as RNGiftedChat} from 'react-native-gifted-chat';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import type ReactElement from 'react';
import {StyleSheet, View, ViewPropTypes} from 'react-native';
import {Image} from '../image/Image';

const styles = {
    bubble: {
        right: {
            backgroundColor: 'green',
        },
        left: {},
    },
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
};


export const TapaalChat = ({style, user, onSendImage, ...props}: Object): ReactElement<RNGiftedChat> => {

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

    type OnImageChangeCallback = (event: { nativeEvent: { uri: string, linkUri: string } }) => void;

    const onImageChange: OnImageChangeCallback = ({nativeEvent}) => {

        const {linkUri} = nativeEvent;

        const message = [{
            user,
            createdAt: new Date(),
            _id: uuidv4(),
            image: linkUri,
            bubbleBgColor: 'transparent',
        }];
        onSendImage(message);

        // upload gif using local uri to somewhere publicly accessible (eg. firebase storage)
        // send a new message with message.image = <publicDownloadUrl>
    };

    const renderComposer = props => <Composer {...props} textInputProps={{onImageChange}}/>;

    const renderBubble = (props) => {
        const {currentMessage} = props;
        // console.log('renderBubble', JSON.stringify(props, 0, 50));
        return (
            <Bubble {...props}
                    wrapperStyle={{right: [styles.bubble.right, currentMessage.bubbleBgColor && {backgroundColor: currentMessage.bubbleBgColor}],left:[styles.bubble.left, currentMessage.bubbleBgColor && {backgroundColor: currentMessage.bubbleBgColor}]}}/>
        );
    };
    return (
        <RNGiftedChat
            renderComposer={renderComposer}
            renderMessageImage={renderMessageImage}
            user={user}
            renderBubble={renderBubble}
            {...props} />
    );
};

TapaalChat.propTypes = {};

TapaalChat.defaultProps = {};


