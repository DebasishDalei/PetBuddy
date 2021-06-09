import React, { Component } from 'react';
import { StyleSheet, Modal, Text, TouchableHighlight, View, Alert } from 'react-native';

export default class ModalExample extends Component {
    state = {
        modalVisible: false,
    };

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    render() {
        return (
            <View style={styles.view}>
                <Text style={{ fontSize: '300' }}>Hello</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    view: {
        borderWidth: 10,
        backgroundColor: 'red',
        height: '100%',
        width: '100%'
    }
});