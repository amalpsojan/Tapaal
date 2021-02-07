import React, {Component} from 'react';
import {View,Dimensions} from 'react-native';

const screen = Dimensions.get("window");

const width = screen.width;
const height = screen.height;
class CallsScreen extends Component {



    render() {
        return <View style={{backgroundColor:'red',width,height}}>

        </View>
    }
}

export {CallsScreen};
