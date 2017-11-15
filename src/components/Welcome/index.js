import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Dimensions,
    Image,
    StyleSheet,
} from 'react-native';


const styles = StyleSheet.create({
    logoImage: {
        resizeMode: 'contain',
        position: 'absolute',
    },
});


const imageList = [
    require('../../static/images/bg.jpg'),
];
const words = [
];
export default class Welcome extends React.Component {
    constructor() {
        super();
        this.state = {
            position: 0,
        };
    }

    return() {
        const { width, height } = Dimensions.get('window');
        return (
            <ImageBackground source={imageList[this.state.position]} style={{ width, height }}>
                <Image
                    source={require('../../static/images/logo.png')}
                    style={[
                        styles.logoImage,
                        {
                            top: Math.floor(height * 0.1),
                            left: Math.floor(width * 0.25),
                            width: Math.floor(width * 0.5),
                            height: 80,
                        },
                    ]}
                />
                
            </ImageBackground>
        );
    }
};

