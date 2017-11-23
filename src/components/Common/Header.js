import React from 'react';
import { Header, Left, Right, Body, Button, Title, Icon, View } from 'native-base';
import { Actions } from 'react-native-router-flux';
import propTypes from 'prop-types';

const CustomHeader = props => (
    // <StyleProvider >
    <Header androidStatusBarColor="#D24D47" style={{ backgroundColor: props.StatusBarColor, borderBottomWidth: 0 }} noShadow>
        <Left>
            {props.backButton ?
                <Button transparent onPress={props.backButtonCallback}>
                    <Icon name="ios-arrow-round-back" style={{ color: '#222' }} />
                </Button>
                : null}
        </Left>
        <Body>
            <Title style={{ fontFamily: 'Lato' }}>{props.title}</Title>
        </Body>
        <Right>
            {props.rightButton}
        </Right>
    </Header>
    // </StyleProvider>
);

CustomHeader.propTypes = {
    title: propTypes.string,
    backButton: propTypes.bool,
    rightButton: propTypes.element,
    backButtonCallback: propTypes.func,
    StatusBarColor: propTypes.string,
};

CustomHeader.defaultProps = {
    title: '',
    backButton: true,
    rightButton: <View />,
    backButtonCallback: () => Actions.pop(),
    StatusBarColor: '#CADFCB',
};

export default CustomHeader;
