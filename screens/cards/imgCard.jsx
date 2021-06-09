import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import { FontAwesome, Fontisto } from '@expo/vector-icons';

export default function ImgCard({ data }) {
    const [flag, setFlag] = useState(false);
    const showDetails = () => {
        if (flag == false) {
            return (
                <TouchableOpacity onPress={() => setFlag(!flag)} style={styles.detailBox1}>
                    <Image
                        style={{
                            flex: 1,
                            width: undefined,
                            height: undefined
                            // aspectRatio: 1
                        }}
                        source={require('../../assets/dog.jpg')} />
                </TouchableOpacity>);
        }
        else {
            return (
                <TouchableOpacity onPress={() => setFlag(!flag)} style={styles.detailBox2}>
                    <Text style={styles.pettype}>{data.pettype}</Text>
                    <Text style={styles.description}>{data.description}</Text>
                    <Text style={styles.contact}>{data.contact}</Text>
                </TouchableOpacity>);
        }
    }
    return (
        // <TouchableOpacity>
        <View style={styles.card}>
            <View style={styles.head}>
                <Image
                    style={{ width: 100, height: 100, borderRadius: 50 }}
                    source={require('../../assets/profile_pic.JPG')} />
                <View>
                    <Text style={styles.username}>{data.username}</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Fontisto name="date" size={24} color="black" style={{ marginTop: 10, marginLeft: 10 }} />
                        <Text style={styles.date}>{data.date}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', marginLeft: 300 }}>
                    <FontAwesome name="tags" size={26} color="#000066" />
                    <Text style={styles.type}>{data.type}</Text>
                </View>
            </View>
            {showDetails()}
            <Text style={styles.heading}>{data.heading}</Text>
            <View style={{ flexDirection: 'row', marginLeft: 600, marginBottom: 10 }}>
                <FontAwesome name="rupee" size={24} color="black" />
                <Text style={styles.amount}>{data.amount}</Text>
            </View>
        </View>
        // </TouchableOpacity> 
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        marginHorizontal: 20,
        marginVertical: 10,
        elevation: 50,
        backgroundColor: 'white',
        shadowOffset: { width: 5, height: 5 },
        shadowColor: 'grey',
        shadowOpacity: 0.3
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        borderBottomWidth: 1,
        marginHorizontal: 5,
        padding: 10,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    username: {
        fontSize: 30,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        letterSpacing: 2,
        marginLeft: 10,
        color: '#000033'
    },
    type: {
        fontSize: 24,
        textTransform: 'capitalize',
        marginLeft: 10,
        marginTop: 10,
        color: '#000066'

    },
    heading: {
        fontSize: 24,
        color: '#494f50',
        marginHorizontal: 10
    },
    detailBox1: {
        height: 350,
        marginHorizontal: 10,
        paddingVertical: 10,
    },
    date: {
        color: '#494f50',
        fontSize: 20,
        marginLeft: 10,
        marginTop: 10
    },
    amount: {
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: 10
    },
    detailBox2: {
        height: 350,
        marginHorizontal: 10,
        paddingVertical: 20,
    },
    pettype: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 2,
    },
    description: {
        textAlign: 'center',
        fontSize: 18,
        textTransform: 'capitalize',
        letterSpacing: 1,
        flexWrap: 'wrap'
    },
    contact: {
        textAlign: 'center',
        fontSize: 19,
        fontWeight: 'bold',
        letterSpacing: 2,
        marginTop: 10
    }
});