import React, { Component } from 'react';
import { StatusBar, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Text, View, Thumbnail, Icon } from 'native-base';
import SideMenu from 'react-native-side-menu';
import { Actions, DefaultRenderer } from 'react-native-router-flux';
import deviceInfo from 'react-native-device-info';
import styles from '../../static/style';

const drawerStyles = {
    drawer: {
        shadowColor: '#000',
        shadowOpacity: 0.3,
        shadowRadius: 1,
        backgroundColor: '#4A4A4A',
        padding: 10,
        flex: 1,
    },
    main: { paddingLeft: 0 },
    avatarImage: {
        width: 50,
        height: 50,
        borderWidth: 3,
        borderColor: '#fff',
    },
    link: {
        flexDirection: 'row',
        padding: 5,
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
    },
    icon: {
        color: '#fff', marginRight: 10, width: 30,
    },
    menuText: { color: '#fff', fontFamily: 'Lato', fontSize: 14 },
};

const Menu = props => (
    <View style={drawerStyles.drawer}>
        <View style={{ flex: 5, marginTop: 20 }}>
            <TouchableOpacity style={drawerStyles.link}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="ios-cart-outline" style={drawerStyles.icon} />
                    <Text style={drawerStyles.menuText}>Buy</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={drawerStyles.link} onPress={props.onItemSelected}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="ios-browsers" style={drawerStyles.icon} />
                    <Text style={drawerStyles.menuText}>Sell</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={drawerStyles.link}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="ios-card" style={drawerStyles.icon} />
                    <Text style={drawerStyles.menuText}>Referral</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={drawerStyles.link}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="ios-heart" style={drawerStyles.icon} />
                    <Text style={drawerStyles.menuText}>Shortlisted Property</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={drawerStyles.link}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name="ios-cog" style={drawerStyles.icon} />
                    <Text style={drawerStyles.menuText}>Setting</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={{ flex: 1, alignSelf: 'center', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Image source={require('../../static/images/logo-transparent.png')} style={{ width: 100, resizeMode: 'contain', height: 40 }} />
            <Text style={[styles.lato, styles.whiteText, { fontSize: 14 }]}>Livvz.com - { deviceInfo.getVersion() } </Text>
        </View>
    </View>
);


export default class NavigationDrawer extends Component {
    constructor() {
        super();
        this.drawer = null;
        this.state = {
            isOpen: false,
        };
        this.onMenuItemSelected = this.onMenuItemSelected.bind(this);
    }

    componentDidMount() {
        Actions.refresh({ key: 'afterLogin', ref: this.drawer });
    }

    onMenuItemSelected(item) {
        this.setState({
            isOpen: false,
            selectedItem: item,
        });
    }
    render() {
        const state = this.props.navigationState;
        const menu = <Menu onItemSelected={this.onMenuItemSelected} />;
        return (
            <SideMenu
                menu={menu}
                isOpen={this.state.isOpen}
                onChange={isOpen => this.setState({ isOpen })}
            >
                <StatusBar backgroundColor="#D24D47" />
                <DefaultRenderer
                    navigationState={state.children[state.children.length - 1]}
                    onNavigate={this.props.onNavigate}
                    toggle={() => {
                        this.setState({ isOpen: true });
                    }}
                />
            </SideMenu>
        );
    }
}
