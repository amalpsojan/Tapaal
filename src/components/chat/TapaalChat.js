import React from 'react';
import {Composer, InputToolbar, Bubble, Send, Actions, GiftedChat as RNGiftedChat} from 'react-native-gifted-chat';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import type ReactElement from 'react';
import {View, PermissionsAndroid, Text, TouchableOpacity, StyleSheet} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

import {Image} from '../image/Image';

const primaryTextColor = 'white';

const backgroundColor = '#080b10';

const BOTTOM_CONATINER_WIDTH = '100%';

const inputBackgroundColor = '#2d383e';

const INPUT_CONATINER_WIDTH = '85%';

const INPUT_HEIGHT = 44;
const INPUT_WIDTH = '80%';

const styles = {
    container: {
        flex: 1,
        backgroundColor: backgroundColor,
    },
    bubble: {
        right: {
            backgroundColor: 'red',
        },
        left: {
            backgroundColor: 'blue',
        },
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
    textInputConatiner: {
        width: INPUT_CONATINER_WIDTH,
        flexDirection: 'row',
        borderRadius: 25,
        backgroundColor: inputBackgroundColor,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    textInput: {
        color: primaryTextColor,
        height: INPUT_HEIGHT,
        width: INPUT_WIDTH,
        fontSize: 15,
    },
    bottom: {
        // height:44,
        // width: BOTTOM_CONATINER_WIDTH,
        flexDirection: 'row',
        alignItems: 'center',
        // marginHorizontal: 10,
        marginVertical: 5,
    },
    iconContainer: {
        emoji: {
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 4,
            marginRight: 4,
            marginBottom: 0,
        },
        camera: {
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 4,
            marginRight: 4,
            marginBottom: 0,
        },
        attach: {
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 4,
            marginRight: 4,
            marginBottom: 0,
        },
        record: {
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            // marginHorizontal: 5,
            backgroundColor: '#00b19b',
            borderRadius: 50,
        },
        send: {
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#00b19b',
            borderRadius: 50,
        },
    },
    icon: {
        emoji: {
            textAlign: 'center',
        },
        camera: {
            textAlign: 'center',
        },
        attach: {
            textAlign: 'center',
        },
        record: {
            textAlign: 'center',
        },
        send: {
            textAlign: 'center',
        },
    },
    inputToolBarContainer: {
        borderTopColor: backgroundColor,
        backgroundColor: backgroundColor,
        alignItems: 'center',
    },
    inputToolBarPrimary: {
        alignItems: 'center',
    },
};


const CustomImageButton = (props) => (
    <View style={styles.iconContainer.camera}>
        <IonIcon style={styles.icon.camera} name={'camera'} size={26} color="blue"/>
    </View>
);

const CustomAttachButton = (props) => (
    <View style={styles.iconContainer.attach}>
        <IonIcon style={styles.icon.attach} name={'attach'} size={26} color="blue"/>
    </View>
);

const Emoji = (props) => (
    <View style={styles.iconContainer.emoji}>
        <IonIcon style={styles.icon.emoji} name={'happy'} size={23} color="#fff"/>
    </View>
);

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

const renderBubble = (props) => {
    const {currentMessage, senderBubbleBgColor, receiverBubbleBgColor} = props;

    let bubbleSenderStyle = {};
    let bubbleReceiverStyle = {};

    if (senderBubbleBgColor) {
        bubbleSenderStyle.backgroundColor = senderBubbleBgColor;
    }

    if (receiverBubbleBgColor) {
        bubbleReceiverStyle.backgroundColor = receiverBubbleBgColor;
    }

    if (currentMessage.styles && currentMessage.styles.bubble) {
        bubbleSenderStyle = {...currentMessage.styles.bubble, bubbleSenderStyle};
        bubbleReceiverStyle = {...currentMessage.styles.bubble, bubbleReceiverStyle};
    }


    return (
        <Bubble {...props}
                wrapperStyle={{
                    right: [styles.bubble.right, bubbleSenderStyle],
                    left: [styles.bubble.left, bubbleReceiverStyle],
                }}/>
    );
};

const renderSend = () => null;

const sendAudio = (props) => {
    props.onSendAudio({audio: 'fdsdsfdsfdsfdsfsd'});
};


const RenderSend = (props) => {
    if (props.text) {
        return (
            <Send
                {...props}
                disabled={false}
                containerStyle={styles.iconContainer.send}
            >
                <IonIcon style={styles.icon.send} name={'send'} size={20}
                         color="#fff"/>
            </Send>
        );
    }

    return (
        <TouchableOpacity
            onPress={() => sendAudio(props)}
            accessibilityTraits='button'
            testID='audioSend'
            accessibilityLabel='audioSend'
            accessible
            style={styles.iconContainer.record}
        >
            <View>
                <IonIcon style={styles.icon.record} name={'ios-mic'} size={26}
                         color="#fff"/>
            </View>
        </TouchableOpacity>
    );
};

const renderInputToolbar = (props) => {
    const backgroundColor = props.backgroundColor;
    return (
        <InputToolbar
            {...props}
            containerStyle={[styles.inputToolBarContainer, backgroundColor && {
                backgroundColor,
                borderTopColor: backgroundColor,
            }]}
            primaryStyle={[styles.inputToolBarPrimary]}
        />
    );
};

export const TapaalChat = ({innerRef, backgroundColor, user, onSendImage, ...props}: Object): ReactElement<RNGiftedChat> => {

    type OnImageChangeCallback = (event: { nativeEvent: { uri: string, linkUri: string } }) => void;

    const onImageChange: OnImageChangeCallback = ({nativeEvent}) => {

        const {linkUri} = nativeEvent;

        const message = [{
            user,
            createdAt: new Date(),
            _id: uuidv4(),
            image: linkUri,
            styles: {
                bubble: {
                    backgroundColor: 'transparent',
                },
            },
        }];
        onSendImage(message);

        // upload gif using local uri to somewhere publicly accessible (eg. firebase storage)
        // send a new message with message.image = <publicDownloadUrl>
    };

    const renderComposer = props => {
        return (
            <View style={[styles.bottom]}>
                <View style={styles.textInputConatiner}>
                    <Emoji {...props}/>
                    <Composer
                        {...props}
                        textInputStyle={styles.textInput}
                        textInputProps={{onImageChange}}
                    />
                </View>
                <RenderSend {...props}/>
            </View>
        );
    };

    return (
        <View style={[styles.container, backgroundColor && {backgroundColor}]}>
            <RNGiftedChat
                ref={innerRef}
                alwaysShowSend
                renderComposer={renderComposer}
                renderInputToolbar={renderInputToolbar}
                renderMessageImage={renderMessageImage}
                user={user}
                renderBubble={renderBubble}
                renderSend={renderSend}
                scrollToBottom
                {...props} />
        </View>
    );
};

TapaalChat.propTypes = {};

TapaalChat.defaultProps = {};


