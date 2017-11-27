import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';


export default props => (
    <TouchableOpacity
        style={{ margin: 10, width: 30 }}
        underlayColor="#B5B5B5"
        onPress={props.onPress}
    >
        <Icon name="ios-list" />
    </TouchableOpacity>
);

