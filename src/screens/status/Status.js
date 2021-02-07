import React, {Component} from 'react';
import {View,Dimensions} from 'react-native';

const screen = Dimensions.get("window");

const width = screen.width;
const height = screen.height;
class StatusScreen extends Component {



    render() {
        return <View style={{backgroundColor:'yellow',width,height}}>

        </View>
    }
}

export {StatusScreen};
