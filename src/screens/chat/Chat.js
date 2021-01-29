import React, {useCallback, useEffect, useState} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {TapaalChat} from '@components/';

const ChatScreen = ({navigation}) => {

    const [messages, setMessages] = useState([]);

    useEffect(() => {
        setMessages([
            {
                _id: 12,
                text: 'image message',
                createdAt: new Date(Date.UTC(2021, 0, 28, 21, 31, 21)),
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
            },{
                _id: 11,
                text: 'image message',
                createdAt: new Date(Date.UTC(2021, 0, 28, 21, 30, 21)),
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
            },{
                _id: 10,
                text: 'image message',
                createdAt: new Date(Date.UTC(2021, 0, 28, 21, 29, 21)),
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
            },{
                _id: 9,
                text: 'image message',
                createdAt: new Date(Date.UTC(2021, 0, 28, 21, 28, 21)),
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
            },{
                _id: 8,
                text: 'image message',
                createdAt: new Date(Date.UTC(2021, 0, 28, 21, 27, 21)),
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
            },{
                _id: 7,
                text: 'image message',
                createdAt: new Date(Date.UTC(2021, 0, 28, 21, 26, 21)),
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
            },{
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
                text: 'o',
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
            }
        ]);
    }, []);

    const onSend = useCallback((message = []) => {
        console.log('messages :', JSON.stringify(message, 0, 50));
        setMessages(previousMessages => GiftedChat.append(previousMessages, message));
    }, []);

    return (
        <TapaalChat
            messages={messages}
            onSend={message => onSend(message)}
            user={{
                _id: 1,
                name:"Amal",
                avatar: 'https://placeimg.com/160/160/any',
            }}
        />
    );
};

export {ChatScreen};
