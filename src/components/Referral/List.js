import React, { Component } from 'react';
import { View, Text, Dimensions, TouchableOpacity, FlatList, StyleSheet } from 'react-native';
import { Container, Content, Icon, Button } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Header from '../Common/Header';
import globalStyles from '../../static/style';

const dataDummy = require('./dummy.json');

const styles = StyleSheet.create({
    listDataContainer: {
        backgroundColor: '#fff',
        padding: 10,
        flexDirection: 'row',
        marginTop: 10,
    },
    textList: {
        fontFamily: 'Lato',
        marginBottom: 3,
    },
    radioItem: {
        flex: 1,
        padding: 5,
        borderWidth: 0.5,
        margin: 2,
        lineHeight: 10,
        width: 60,
    },
    radioText: {
        fontFamily: 'Lato',
    },
});

class ReferralList extends Component {

    constructor() {
        super();
        this.state = {
            dataList: dataDummy,
        };
    }
    componentDidMount() {
        
    }

    renderItem({ item }) {
        return (
            <View style={styles.listDataContainer}>
                <View style={{ flex: 3 }}>
                    <Text style={styles.textList}>{item.FullName}</Text>
                    <Text style={[styles.textList, { color: '#4A90E2' }]}>{item.Email}</Text>
                    <Text style={[styles.textList, { color: '#666' }]}>{item.PhoneNumber}</Text>
                    <Text style={[styles.textList, { color: '#FF0000' }]}>{item.Type}</Text>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                    <Icon name="ios-time-outline" />
                    <TouchableOpacity
                        style={styles.radioItem}
                        onPress={() => Actions.recall()}
                    >
                        <Text style={styles.radioText}>
                            Call
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.radioItem}
                        onPress={() => this.setState({ type: 'buyer' })}
                    >
                        <Text style={styles.radioText}>
                            Resend
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

    render() {
        const { height } = Dimensions.get('screen');
        return (
            <Container>
                <Header title="Referral" listButton backButton={false} listButtonAction={this.props.toggle}/>
                <Content padder style={{ minHeight: height, backgroundColor: '#CADFCB' }}>
                    <FlatList renderItem={this.renderItem} data={this.state.dataList} />
                    <TouchableOpacity
                        style={[globalStyles.buttonSquare, { backgroundColor: '#4a4a4a' }]}
                        onPress={() => Actions.newReferral()}
                    >
                        <View style={globalStyles.iconContainer}>
                            <Icon name="ios-add" style={{ color: '#fff' }} />
                        </View>
                        <Text style={[globalStyles.buttonSquareText, { marginLeft: 20 }]}> Add </Text>
                    </TouchableOpacity>
                </Content>
            </Container>
        );
    }
}

export default ReferralList;
