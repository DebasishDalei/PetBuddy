import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function ResultCard({ data }) {
    return (
        <View style={styles.card}>
            <Image
                style={styles.img}
                source={require('../../assets/profile_pic.JPG')} />
            <View style={styles.detailBox}>
                <View>
                    <Text style={styles.username}>{data.username}</Text>
                    <Text style={styles.pettype}>{data.pettype}</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <FontAwesome name="tags" size={25} color="#000066" />
                    <Text style={styles.type}>{data.type}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flexDirection: 'row',
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 5,
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 50,
        borderWidth: 10,
        borderColor: 'white',
        borderRightColor: '#005580'
    },
    detailBox: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: 600,
        height: 70,
        backgroundColor: '#eaeffa',
        marginLeft: 5,
        marginTop: 15,
        paddingLeft: 20
    },
    username: {
        color: '#005580',
        fontSize: 30,
        textTransform: 'capitalize',
    },
    pettype: {
        color: 'grey',
        fontSize: 20,
        textTransform: 'capitalize',
        marginTop: 5
    },
    type: {
        color: '#005580',
        fontSize: 25,
        marginLeft: 10
    }
});