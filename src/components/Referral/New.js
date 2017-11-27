import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Container, Content } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../Common/Header';
import globalStyles from '../../static/style';


const localStyle = StyleSheet.create({
    radioContainer: {
        flexDirection: 'row',
        marginTop: 10,
    },
    radioItem: {
        flex: 1,
        padding: 10,
        borderWidth: 0.5,
        margin: 5,
    },
    selected: {
        backgroundColor: 'rgba(240, 240, 240, 1)',
    },
    radioText: {
        textAlign: 'center',
        fontFamily: 'Lato',
        fontSize: 13,
    },
});

class NewReferral extends Component {

    constructor() {
        super();
        this.state = {
            type: 'buyer',
        };
    }
    componentDidMount() {

    }

    render() {
        return (
            <Container>
                <Header title="New Referral" backButton />
                <Content padder style={{ backgroundColor: '#CADFCB' }}>
                    <View style={globalStyles.flex1}>
                        <Text style={globalStyles.lato}>Full Name*</Text>
                        <TextInput style={globalStyles.textInput} />
                    </View>
                    <View style={globalStyles.flex1}>
                        <Text style={globalStyles.lato}>Email*</Text>
                        <TextInput style={globalStyles.textInput} />
                    </View>
                    <View style={globalStyles.flex1}>
                        <Text style={globalStyles.lato}>Phone Number</Text>
                        <TextInput style={globalStyles.textInput} />
                    </View>
                    <View style={globalStyles.flex1}>
                        <Text style={globalStyles.lato}>Type</Text>
                        <View style={localStyle.radioContainer}>
                            <TouchableOpacity
                                style={[localStyle.radioItem, (this.state.type === 'buyer' ? localStyle.selected : null)]}
                                onPress={() => this.setState({ type: 'buyer' })}
                            >
                                <Text style={localStyle.radioText}>
                                    {this.state.type === 'buyer' ? <Icon name="check-circle" size={15} /> : null } 
                                    Buyer
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[localStyle.radioItem, (this.state.type === 'seller' ? localStyle.selected : null)]}
                                onPress={() => this.setState({ type: 'seller' })}
                            >
                                <Text style={localStyle.radioText}>
                                    {this.state.type === 'seller' ? <Icon name="check-circle" size={15} /> : null} 
                                    Seller
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ alignItems: 'flex-end', flex: 1 }}>
                        <TouchableOpacity style={[globalStyles.buttonSquare, { backgroundColor: '#4a4a4a' }]}>
                            <View style={globalStyles.iconContainer}>
                                <Icon name="floppy-o" style={{ color: '#fff', padding: 5 }} size={20} />
                            </View>
                            <Text style={[globalStyles.buttonSquareText]}> Save & New </Text>
                        </TouchableOpacity>
                    </View>
                </Content>
            </Container>
        );
    }
}

export default NewReferral;
