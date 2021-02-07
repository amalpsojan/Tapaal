import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Colors from '@styles/colors';
import {Image} from '@components/image/Image';
import {Text} from '@components/text/text';
import IonIcon from 'react-native-vector-icons/Ionicons';
import NavigationService from '@navigations/index';
import {isIos} from '@constants/index';

const ARROW_ICON = isIos ? 'ios-arrow-back' : 'md-arrow-back';

const styles = {
    container: {
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

const goBack = () => {
    NavigationService.goBack();
};

const Back = ({backArrowColor, backArrowContainerStyle, backArrowStyle}) => (
    <TouchableOpacity onPress={goBack} backArrowContainerStyle={backArrowContainerStyle}>
        <IonIcon style={[styles.icon.back, backArrowStyle]} name={ARROW_ICON} size={28} color={backArrowColor}/>
    </TouchableOpacity>
);

const Title = ({textStyle, title}) => (
    <Text style={textStyle}>{title}</Text>
);


export const Header = ({title, backArrowStyle, backArrowContainerStyle, containerStyle, textStyle, showBackArrow, backArrowColor, headerProps, headerType, textColor}: Object) => {

    let renderExtra = null;
    if (headerType && headerType.toLowerCase() === 'chat') {
        const {groupChat, receivers} = headerProps;
        let avatar, name;
        if (!groupChat) {
            const receiver = receivers[Object.keys(receivers)[0]];
            name = receiver.name;
            avatar = receiver.avatar;
        }

        renderExtra = (
            <>
                <Image
                    resizeMode={'cover'}
                    style={[styles.image]}
                    source={avatar}
                />
                <Title title={name} textStyle={[{color: textColor, paddingHorizontal: 10}]}/>
            </>
        );

    }


    return (
        <View style={[styles.container, containerStyle]}>
            {showBackArrow && <Back
                backArrowStyle={backArrowStyle}
                backArrowColor={backArrowColor}
                backArrowContainerStyle={backArrowContainerStyle}
            />}
            {title && <Title textStyle={textStyle} title={title}/>}
            {renderExtra}
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
