import React, {Component} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {TapaalChat} from '@components/';

class ChatScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            messages: [],
        };
        this.giftedChatRef = React.createRef();
    }

    componentDidMount() {
        this.fetchMessages();
    }

    fetchMessages = () => {
        console.log('fetchMessages');
        const messages = [
            {
                _id: 9,
                text: 'https://google.com',
                createdAt: new Date(Date.UTC(2021, 0, 28, 21, 25, 21)),
                user: {
                    _id: 3,
                    name: 'React Native Developer',
                    avatar: 'https://placeimg.com/150/150/any',
                },
                // Mark the message as sent, using one tick
                sent: true,
                // Mark the message as received, using two tick
                received: true,
                // Mark the message as pending with a clock loader
                pending: true,
                // Any additional custom parameters are passed through
            },{
                _id: 8,
                text: 'internal storageimage message gvtryd5rd54ws43w',
                createdAt: new Date(Date.UTC(2021, 0, 28, 21, 25, 21)),
                user: {
                    _id: 3,
                    name: 'React Native Developer',
                    avatar: 'https://placeimg.com/150/150/any',
                },
                image: 'file:///storage/emulated/0/Tapaal/Media/Tapaal Images/images.jpg',
                // Mark the message as sent, using one tick
                sent: true,
                // Mark the message as received, using two tick
                received: true,
                // Mark the message as pending with a clock loader
                pending: true,
                // Any additional custom parameters are passed through
            },
            {
                _id: 7,
                createdAt: new Date(Date.UTC(2021, 0, 28, 21, 25, 21)),
                user: {
                    _id: 3,
                    name: 'React Native Developer',
                    avatar: 'https://placeimg.com/150/150/any',
                },
                image: 'https://placeimg.com/200/200/any',
                styles:{
                    bubble:{
                        backgroundColor:'transparent'
                    }
                },
                // Mark the message as sent, using one tick
                sent: true,
                // Mark the message as received, using two tick
                received: true,
                // Mark the message as pending with a clock loader
                pending: true,
                // Any additional custom parameters are passed through
            },
            {
                _id: 6,
                text: 'image message',
                createdAt: new Date(Date.UTC(2021, 0, 28, 21, 25, 21)),
                user: {
                    _id: 3,
                    name: 'React Native Developer',
                    avatar: 'https://placeimg.com/150/150/any',
                },
                image: 'https://placeimg.com/200/200/any',
                // Mark the message as sent, using one tick
                sent: true,
                // Mark the message as received, using two tick
                received: true,
                // Mark the message as pending with a clock loader
                pending: true,
                // Any additional custom parameters are passed through
            },
            {
                _id: 5,
                text: 'ooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooo',
                createdAt: new Date(Date.UTC(2021, 0, 27, 21, 30, 21)),
                user: {
                    _id: 3,
                    name: 'React Native Developer',
                    avatar: 'https://placeimg.com/150/150/any',
                },
                // Mark the message as sent, using one tick
                sent: true,
                // Mark the message as received, using two tick
                received: true,
                // Mark the message as pending with a clock loader
                pending: true,
                // Any additional custom parameters are passed through
            },
            {
                _id: 4,
                text: 'l',
                createdAt: new Date(Date.UTC(2021, 0, 26, 21, 30, 21)),
                user: {
                    _id: 3,
                    name: 'React Native Developer',
                    avatar: 'https://placeimg.com/150/150/any',
                },
                // Mark the message as sent, using one tick
                sent: true,
                // Mark the message as received, using two tick
                received: true,
                // Mark the message as pending with a clock loader
                pending: true,
                // Any additional custom parameters are passed through
            },
            {
                _id: 3,
                text: 'l',
                createdAt: new Date(Date.UTC(2021, 0, 25, 21, 30, 21)),
                user: {
                    _id: 3,
                    name: 'React Native Developer',
                    avatar: 'https://placeimg.com/150/150/any',
                },
                // Mark the message as sent, using one tick
                sent: true,
                // Mark the message as received, using two tick
                received: true,
                // Mark the message as pending with a clock loader
                pending: true,
                // Any additional custom parameters are passed through
            },
            {
                _id: 2,
                text: 'e',
                createdAt: new Date(Date.UTC(2021, 0, 24, 21, 30, 21)),
                user: {
                    _id: 3,
                    name: 'React Native Developer',
                    avatar: 'https://placeimg.com/150/150/any',
                },
                // Mark the message as sent, using one tick
                sent: true,
                // Mark the message as received, using two tick
                received: true,
                // Mark the message as pending with a clock loader
                pending: true,
                // Any additional custom parameters are passed through
            },
            {
                _id: 1,
                text: 'H',
                createdAt: new Date(Date.UTC(2021, 0, 23, 21, 30, 21)),
                user: {
                    _id: 3,
                    name: 'React Native Developer',
                    avatar: 'https://placeimg.com/150/150/any',
                },
                // Mark the message as sent, using one tick
                sent: true,
                // Mark the message as received, using two tick
                received: true,
                // Mark the message as pending with a clock loader
                pending: true,
                // Any additional custom parameters are passed through
            },
        ];
        this.setState({messages});
    };


    onSend = (message = []) => {
        console.log('messages :', JSON.stringify(message, 0, 50));
        const messages = GiftedChat.append(this.state.messages, message);
        this.setState((prev) => ({...prev.messages, messages}));
        this.giftedChatRef.current.scrollToBottom();
    };

    onSendAudio = (message = []) => {
        console.log('Audio messages :', JSON.stringify(message, 0, 50));
    };

    onSendImage = (message = []) => {
        console.log('Image message :', JSON.stringify(message, 0, 50));

        // setMessages(previousMessages => GiftedChat.append(previousMessages, message));
    };

    render() {
        const {messages}=this.state
        return (
            <TapaalChat
                innerRef={this.giftedChatRef}
                backgroundColor={'#080b10'}
                senderBubbleBgColor={"green"}
                receiverBubbleBgColor={"white"}
                iconColor={"white"}
                sendIconConatinerColor={"#00b19b"}
                textColor={"white"}
                inputBackgroundColor={"#2d383e"}
                messages={messages}
                onSend={message => this.onSend(message)}
                onSendAudio={message => this.onSendAudio(message)}
                onSendImage={message => this.onSend(message)}
                user={{
                    _id: 1,
                    name: 'Amal',
                    avatar: 'https://placeimg.com/160/160/any',
                }}
            />
        );
    }
}

export {ChatScreen};
