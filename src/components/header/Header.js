import React from 'react';
import {View} from 'react-native';
import Colors from '@styles/colors';
import {Image} from '@components/image/Image';
import {Text} from '@components/text/text';

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
        marginHorizontal: 10,
    },
};

const users = {
        _id: 3,
        name: 'React Native Developer',
        avatar: 'https://placeimg.com/150/150/any',
};

export const Header = ({isGroup, profileImage,textColor}: Object) => {
    return (
        <View style={[styles.container]}>
            <Image
                resizeMode={'cover'}
                style={[styles.image]}
                source={users.avatar}
            />
            <Text style={[{color:textColor}]}>{users.name}</Text>
        </View>
    );
};

Header.propTypes = {};

Header.defaultProps = {
    isGroup: false,
    backgroundColor: '#00b19b',
    profileImage: 'https://placeimg.com/150/150/any',
    textColor:'#ffffff'
};
