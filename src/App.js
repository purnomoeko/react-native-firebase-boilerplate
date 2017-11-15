import React, { Component } from 'react';
import SplashScreen from 'react-native-splash-screen';
import {
    AsyncStorage,
    View,
    Text,
} from 'react-native';
import { Provider } from 'react-redux';
import {
    Router,
    Stack,
    Scene,
} from 'react-native-router-flux';
import { persistStore } from 'redux-persist';
import Welcome from './components/Welcome';
import configureStore from './configureStore';


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
                <Router>
                    <Stack key="root" hideNavBar>
                        <Scene key="welcome" component={Welcome} />
                    </Stack>
                </Router>
            </Provider>
        );
    }
}
