import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Container, Content, Button, Icon } from 'native-base';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Header from '../Common/Header';
import globalStyles from '../../static/style';

const mapDispatchToProps = dispatch => (
    bindActionCreators({}, dispatch)
);

const mapStateToProps = state => ({
    navigation: state.navigation,
});


class Step2 extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    componentDidMount() {

    }

    render() {
        return (
            <Container style={{ backgroundColor: '#CADFCB' }}>
                <Header title="Your Path" />
                <Content padder>
                    <View style={{ justifyContent: 'center' }}>
                        <Text style={globalStyles.lato}>What do you want to do?</Text>
                        <View>
                            <TouchableOpacity style={[globalStyles.buttonSquare, { backgroundColor: '#fff' }]}>
                                <View style={globalStyles.iconContainer}>
                                    <Icon name="ios-cart" style={{ color: '#F14336' }} />
                                </View>
                                <Text style={[globalStyles.buttonSquareText, { color: '#222' }]}> Buy </Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={[globalStyles.buttonSquare, { backgroundColor: '#fff' }]}>
                                <View style={globalStyles.iconContainer}>
                                    <Icon name="ios-card" style={{ color: '#D0021B' }} />
                                </View>
                                <Text style={[globalStyles.buttonSquareText, { color: '#222' }]}> Refer </Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <TouchableOpacity style={[globalStyles.buttonSquare, { backgroundColor: '#fff' }]}>
                                <View style={globalStyles.iconContainer}>
                                    <Icon name="ios-browsers" style={{ color: '#4A90E2' }} />
                                </View>
                                <Text style={[globalStyles.buttonSquareText, { color: '#222' }]}> Sell </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Step2);
