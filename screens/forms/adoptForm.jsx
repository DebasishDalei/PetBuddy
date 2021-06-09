import React, { useState } from 'react';
import {
    StyleSheet, View, Text, TextInput, Button,
    TouchableWithoutFeedback, Keyboard, Alert, TouchableOpacity
} from 'react-native';

export default function AdoptForm({ username, contact }) {
    const [pettype, setPetType] = useState('');
    const [heading, setHeading] = useState('');
    const [description, setDescription] = useState('');

    const post = () => {
        fetch(
            'http://localhost/PetLove/submitPost.php', {
            // 'http://nitwhub.tech/PetLove/submitPost.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: JSON.stringify({
                transid: Math.floor(Math.random() * 1000000000 + 1),
                username: username,
                pettype: pettype,
                heading: heading,
                description: description,
                amount: 0,
                contact: contact,
                buy: 0,
                sell: 0,
                adopt: 1,
                donate: 0
            })
        }
        ).then(response => response.json()).then((responseJson) => {
            if (responseJson.status === 'failure') {
                // Alert.alert(
                //     'FAILED',
                //     'check credentials or register'
                // );
            }
            else {
                // Alert.alert(
                //     'SUCCESS',
                //     'welcome' + responseJson.username
                // );
            }
            console.log(responseJson);
        }
        ).catch((error) => {
            console.log(error);
        });
    };
    return (
        <TouchableWithoutFeedback style={styles.contents} onPress={() => Keyboard.dismiss()}>
            <View>
                <Text style={styles.title}>Write your Post</Text>
                <TextInput
                    placeholder='Pet-type'
                    onChangeText={(val) => setPetType(val)}
                    style={styles.pettype}></TextInput>
                <TextInput
                    placeholder='Heading'
                    onChangeText={(val) => setHeading(val)}
                    style={styles.heading}></TextInput>
                <TextInput
                    multiline
                    placeholder='Describe your requirement'
                    onChangeText={(val) => setDescription(val)}
                    keyboardType='numeric'
                    style={styles.description}></TextInput>
                <TouchableOpacity style={styles.post} onPress={post}>
                    <Text style={styles.text}>Post</Text>
                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback >
    );
}

const styles = StyleSheet.create({
    contents: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        width: 600,
        fontSize: 40,
        fontWeight: 'bold',
        color: '#005580',
        marginTop: 20,
        marginLeft: 20,
        letterSpacing: 5
    },
    pettype: {
        width: 650,
        height: 60,
        borderBottomWidth: 1,
        fontSize: 34,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        color: '#005580',
        marginTop: 20,
        marginLeft: 20,
        paddingLeft: 20,
        paddingVertical: 10
    },
    heading: {
        width: 650,
        height: 60,
        borderBottomWidth: 1,
        fontSize: 30,
        fontWeight: 'bold',
        textTransform: 'capitalize',
        color: '#005580',
        marginTop: 20,
        marginLeft: 20,
        paddingLeft: 20,
        paddingVertical: 10
    },
    description: {
        width: 650,
        height: 300,
        borderBottomWidth: 1,
        fontSize: 30,
        fontWeight: 'bold',
        color: '#005580',
        marginTop: 20,
        marginLeft: 20,
        paddingLeft: 20,
        paddingVertical: 10
    },
    post: {
        width: 170,
        height: 70,
        borderRadius: 35,
        backgroundColor: '#005580',
        marginTop: 30,
        marginLeft: 280,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 5
    }
}
);