import React from 'react';
import {Composer, InputToolbar, Bubble, Send, Actions, GiftedChat as RNGiftedChat} from 'react-native-gifted-chat';
import 'react-native-get-random-values';
import {v4 as uuidv4} from 'uuid';
import type ReactElement from 'react';
import {View, PermissionsAndroid, Text, TouchableOpacity, StyleSheet} from 'react-native';
import IonIcon from 'react-native-vector-icons/Ionicons';

import {Image} from '../image/Image';
import MessageText from '../chat/MessageText';
import {isValidURL} from '@utils/helper';
import MessageURL from '@components/chat/MessageURL';

const INPUT_CONATINER_WIDTH = '85%';

const INPUT_HEIGHT = 44;
const INPUT_WIDTH = '80%';

const styles = {
    container: {
        flex: 1,
    },
    bubble: {
        right: {
            maxWidth:200
        },
        left: {
            maxWidth:200
        },
    },
    imageContainer: {
        // borderRadius: 15,
        // paddingTop:2,
        // paddingBottom:2,
        // padding: 2,
    },
    image: {
        width: 200,
        height: 200,
        // paddingTop: 6,
        // paddingBottom: 6,
        // padding: 6,
        // borderRadius: 15,
    },
    textInputConatiner: {
        width: INPUT_CONATINER_WIDTH,
        flexDirection: 'row',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 5,
    },
    textInput: {
        height: INPUT_HEIGHT,
        // width: INPUT_WIDTH,
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
            borderRadius: 50,
        },
        send: {
            width: 40,
            height: 40,
            alignItems: 'center',
            justifyContent: 'center',
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
        alignItems: 'center',
    },
    inputToolBarPrimary: {
        alignItems: 'center',
    },
};


const CustomImageButton = (props) => (
    <View style={styles.iconContainer.camera}>
        <IonIcon style={styles.icon.camera} name={'camera'} size={26} color={props.iconColor}/>
    </View>
);

const CustomAttachButton = (props) => (
    <View style={styles.iconContainer.attach}>
        <IonIcon style={styles.icon.attach} name={'attach'} size={26} color={props.iconColor}/>
    </View>
);

const Emoji = (props) => (
    <View style={styles.iconContainer.emoji}>
        <IonIcon style={styles.icon.emoji} name={'happy'} size={23} color={props.iconColor}/>
    </View>
);

const renderMessageImage = (Props) => {
    return (
        <View
            style={[styles.imageContainer]}
        >
            <Image
                resizeMode={'cover'}
                style={[styles.image]}
                source={Props.currentMessage.image}
            />
        </View>
    );
};

const renderMessageText = (Props) => {
    if(isValidURL(Props.currentMessage.text)){
        return <MessageURL text={Props.currentMessage.text}/>
    }
    return <MessageText {...Props}/>

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
                containerStyle={[styles.iconContainer.send,{backgroundColor:props.sendIconContainerColor}]}
            >
                <IonIcon style={styles.icon.send} name={'send'} size={20}
                         color={props.sendIconColor}/>
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
            style={[styles.iconContainer.record,{backgroundColor:props.sendIconContainerColor}]}
        >
            <View>
                <IonIcon style={styles.icon.record} name={'ios-mic'} size={26}
                         color={props.sendIconColor}/>
            </View>
        </TouchableOpacity>
    );
};

const renderInputToolbar = (props) => {
    const backgroundColor = props.backgroundColor;
    return (
        <InputToolbar
            {...props}
            containerStyle={[styles.inputToolBarContainer,{
                backgroundColor,
                borderTopColor: backgroundColor,
            }]}
            primaryStyle={[styles.inputToolBarPrimary]}
        />
    );
};

export const TapaalChat = ({containerStyle,innerRef, backgroundColor, user, onSendImage, ...props}: Object): ReactElement<RNGiftedChat> => {

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
                <View style={[styles.textInputConatiner,{backgroundColor: props.inputBackgroundColor}]}>
                    <Emoji {...props}/>
                    <Composer
                        {...props}
                        textInputStyle={[styles.textInput, {color: props.textColor}]}
                        textInputProps={{onImageChange}}
                    />
                </View>
                <RenderSend {...props}/>
            </View>
        );
    };

    return (
        <View style={[styles.container,{backgroundColor},containerStyle]}>
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

TapaalChat.defaultProps = {
    backgroundColor:'#080b10',
    senderBubbleBgColor:'green',
    receiverBubbleBgColor:'white',
    sendIconColor:'white',
    iconColor:'white',
    sendIconContainerColor:'#00b19b',
    textColor:'white',
    inputBackgroundColor:'#2d383e'
};


