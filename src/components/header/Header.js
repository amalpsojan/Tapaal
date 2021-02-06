import React from 'react';
import {View} from 'react-native';
import Colors from '@styles/colors';
import {Image} from '@components/image/Image';
import {Text} from '@components/text/text';
import IonIcon from 'react-native-vector-icons/Ionicons';

const styles = {
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: Colors.primary,
        alignItems: 'center',
    },
    image: {
        height: 36,
        width: 36,
        borderRadius: 18,
    },
    icon: {
        back: {
            paddingHorizontal:5,
            textAlign: 'center',
        },
    },
};

const users = {
    _id: 3,
    name: 'React Native Developer',
    avatar: 'https://placeimg.com/150/150/any',
};

export const Header = ({backArrowColor, sender, receivers, groupChat, profileImage, textColor}: Object) => {
    // md-arrow-back
    let avatar, name;
    if (!groupChat) {
        const receiver = receivers[Object.keys(receivers)[0]];
        name = receiver.name;
        avatar = receiver.avatar;
    }

    return (
        <View style={[styles.container]}>
            <IonIcon style={styles.icon.back} name={'md-arrow-back'} size={28} color={backArrowColor}/>
            <Image
                resizeMode={'cover'}
                style={[styles.image]}
                source={avatar}
            />
            <Text style={[{color: textColor}]}>{name}</Text>
        </View>
    );
};

Header.propTypes = {};

Header.defaultProps = {
    isGroup: false,
    backgroundColor: '#00b19b',
    profileImage: 'https://placeimg.com/150/150/any',
    textColor: '#ffffff',
};
