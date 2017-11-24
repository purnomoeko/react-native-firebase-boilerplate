import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import {
    AsyncStorage,
    View,
    Text,
} from 'react-native';
import { Provider, connect } from 'react-redux';
import {
    Router,
    Scene,
    ActionConst,
} from 'react-native-router-flux';
import { persistStore } from 'redux-persist';
import { Root } from 'native-base';
import Welcome from './components/Welcome';
import { Step1, Step2 } from './components/Signup';
import configureStore from './configureStore';

const RouterWithRedux = connect()(Router);

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rehydrated: false,
            store: configureStore(),
        };
    }

    componentWillMount() {
        persistStore(this.state.store, { storage: AsyncStorage }, () => {
            this.setState({
                rehydrated: true,
            });
        });
    }

    componentDidMount() {
        SplashScreen.hide();
    }

    render() {
        if (this.state.rehydrated === false) {
            return (
                <View>
                    <Text style={{ textAlign: 'center' }}>Preparing your data</Text>
                </View>
            );
        }
        return (
            <Provider store={this.state.store}>
                <Root>
                    <RouterWithRedux key="root">
                        <Scene key="root1" hideNavBar>
                            <Scene key="welcome" component={Welcome} />
                            <Scene key="signupStep1" component={Step1} />
                            <Scene key="signupStep2" component={Step2} />
                        </Scene>
                    </RouterWithRedux>
                </Root>
            </Provider>
        );
    }
}
