import React from 'react';
import {View, TouchableOpacity, Platform} from 'react-native';
import Colors from '@styles/colors';
import {Image} from '@components/image/Image';
import {Text} from '@components/text/text';
import IonIcon from 'react-native-vector-icons/Ionicons';
import NavigationService from '@navigations/index';
import {isIos} from '@constants/index';

const arrowIcon= isIos ? 'ios-arrow-back': 'md-arrow-back'

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
            paddingHorizontal: 5,
            textAlign: 'center',
        },
    },
};

export const Header = ({backArrowColor, sender, receivers, groupChat, profileImage, textColor}: Object) => {
    let avatar, name;
    if (!groupChat) {
        const receiver = receivers[Object.keys(receivers)[0]];
        name = receiver.name;
        avatar = receiver.avatar;
    }

    const goBack = () => {
        NavigationService.goBack();
    };

    return (
        <View style={[styles.container]}>
            <TouchableOpacity onPress={goBack}>
                <IonIcon style={styles.icon.back} name={arrowIcon} size={28} color={backArrowColor}/>
            </TouchableOpacity>
            <Image
                resizeMode={'cover'}
                style={[styles.image]}
                source={avatar}
            />
            <Text style={[{color: textColor,paddingHorizontal: 10}]}>{name}</Text>
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
