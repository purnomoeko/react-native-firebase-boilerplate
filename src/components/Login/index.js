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


class Login extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    signup() {
        Actions.afterLogin();
    }

    render() {
        return (
            <Container style={{ backgroundColor: '#CADFCB' }}>
                <Header title="Login" />
                <Content padder>
                    <View style={globalStyles.flex1}>
                        <Text style={globalStyles.lato}>Email*</Text>
                        <TextInput style={globalStyles.textInput} />
                    </View>
                    <View style={globalStyles.flex1}>
                        <Text style={globalStyles.lato}>Password*</Text>
                        <TextInput style={globalStyles.textInput} />
                    </View>
                    <View>
                        <TouchableOpacity style={[globalStyles.buttonSquare, { backgroundColor: '#4CD964' }]}>
                            <View style={globalStyles.iconContainer}>
                                <Icon name="ios-log-in" style={{ color: '#222' }} />
                            </View>
                            <Text style={[globalStyles.buttonSquareText, { color: '#222' }]}> Login </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={[globalStyles.buttonSquare, { backgroundColor: '#222' }]}>
                            <View style={globalStyles.iconContainer}>
                                <Icon name="ios-refresh" style={{ color: '#fff' }} />
                            </View>
                            <Text style={[globalStyles.buttonSquareText, { color: '#fff' }]}> Forget Password </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={[globalStyles.flex1, { marginTop: 25 }]}>
                        <Text style={[globalStyles.lato, { fontSize: 14 }]}>Express Login</Text>
                    </View>
                    <View>
                        <TouchableOpacity style={[globalStyles.buttonSquare, { backgroundColor: '#3B5998' }]}>
                            <View style={globalStyles.iconContainer}>
                                <Icon name="logo-facebook" style={{ color: '#fff' }} />
                            </View>
                            <Text style={[globalStyles.buttonSquareText]}> Facebook </Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={[globalStyles.buttonSquare, { backgroundColor: '#fff' }]}>
                            <View style={globalStyles.iconContainer}>
                                <Icon name="logo-google" style={{ color: '#F14336' }} />
                            </View>
                            <Text style={[globalStyles.buttonSquareText, { color: '#222' }]}> Google </Text>
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
