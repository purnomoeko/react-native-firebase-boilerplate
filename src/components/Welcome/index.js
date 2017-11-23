import React from 'react';
import {
    View,
    Text,
    ImageBackground,
    Dimensions,
    Image,
    StyleSheet,
} from 'react-native';
import { Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';
import translation from '../../static/locales';
import globalStyles from '../../static/style';

const styles = StyleSheet.create({
    logoImage: {
        resizeMode: 'contain',
    },
    welcomeText: {
        fontFamily: 'System',
        textAlign: 'center',
        backgroundColor: 'transparent',
        color: '#fff',
        textShadowColor: '#222',
        textShadowOffset: {
            width: 2,
            height: 2,
        },
        fontSize: 16,
    },
});


const imageList = [
    require('../../static/images/bg2.jpg'),
    require('../../static/images/bg.jpg'),
    require('../../static/images/bg3.jpg'),
];

const words = [
    translation.t('welcome.pict2'),
    translation.t('welcome.pict1'),
    translation.t('welcome.pict3'),
];
export default class Welcome extends React.Component {
    constructor() {
        super();
        this.state = {
            position: 0,
        };
        this.interval = null;
    }

    componentWillMount() {
        this.interval = setInterval(() => {
            this.setState({
                position: ((this.state.position + 1) % 3),
            });
        }, 10000);
    }

    render() {
        const { width, height } = Dimensions.get('window');
        return (
            <ImageBackground source={imageList[this.state.position]} style={{ width, height, flex: 1 }}>
                <View style={{
                    marginTop: height * 0.1,
                    width: 150,
                    height: 150,
                    flex: 3,
                    alignSelf: 'center',
                }}
                >
                    <Image
                        source={require('../../static/images/logo.png')}
                        style={[
                            styles.logoImage,
                            {
                                width: 150,
                                height: 150,
                            },
                        ]}
                    />
                </View>
                <View style={{
                    alignSelf: 'center',
                    flex: 1,
                    padding: 15,
                    justifyContent: 'flex-end',
                }}
                >
                    <Text style={styles.welcomeText}>{words[this.state.position]}</Text>
                </View>
                <View style={{
                    padding: 15,
                    width,
                    flex: 1,
                    justifyContent: 'flex-end',
                }}
                >
                    <Button iconLeft style={{ backgroundColor: '#4CD964', marginBottom: 10 }} block onPress={() => Actions.signupStep1()}>
                        <Icon name="ios-create" />
                        <Text style={[ globalStyles.lato, { color: '#222' }]}> Signup</Text>
                    </Button>
                    <Button iconLeft bordered success block style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderColor: '#4CD964' }} >
                        <Icon name="ios-log-in-outline" />
                        <Text style={[globalStyles.lato, { color: '#222' }]}> Login</Text>
                    </Button>
                </View>
            </ImageBackground>
        );
    }
}

