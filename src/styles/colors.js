const BASE_COLORS = {
    white: '#ffffff',
    black: '#000000',
    green: '#00ff62',
    red: '#ff2100',
    yellow: '#fffb00',

    // GRAYSCALE
    grayLight: '#e6e6e6',
    grayMedium: '#cacaca',
    grayDark: '#8a8a8a',

    // ACTIONS
    success: '#3adb76',
    warning: '#ffae00',
    alert: '#cc4b37',
    error: '#ff0000',

};

export const themes = {
    LIGHT_MODE:{
        primary: '#075e55',
        secondary: '#767676',

        primaryText: '#ffffff',

        background: '#080b10',
        inputBackground: '#ffffff',

        icon: '#878c8f',

        //Chat
        sendIcon:'#ffffff',
        sendIconContainer:'#00b19b',
        senderBubbleBackground:'green',
        receiverBubbleBackground:'white',
        ...BASE_COLORS,
    },
    DARK_MODE: {
        primary: '#075e55',
        secondary: '#767676',

        primaryText: '#ffffff',

        background: '#080b10',
        inputBackground: '#2d383e',

        icon: '#ffffff',
        statusBarColor:'#054c44',

        //Chat
        sendIcon:'#ffffff',
        sendIconContainer:'#00b19b',
        senderBubbleBackground:'green',
        receiverBubbleBackground:'white',
        ...BASE_COLORS,
    }
};

const Colors = themes.DARK_MODE;
// const Colors = themes['DARK_MODE'];

export default Colors;
