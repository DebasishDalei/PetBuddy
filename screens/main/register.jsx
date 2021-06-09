import React, { useState } from 'react';
import {
    StyleSheet, View, Text, TextInput, Button,
    TouchableWithoutFeedback, Keyboard, Alert
} from 'react-native';

export default function Register({ navigation }) {
    const [username, setUsername] = useState('');
    const [contact, setContact] = useState('');
    const [password, setPassword] = useState('');

    const registerUser = () => {
        fetch(
            'http://localhost/PetLove/register.php', {
            // 'http://nitwhub.tech/PetLove/register.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: JSON.stringify({
                username: username,
                contact: contact,
                password: password
            })
        }
        ).then(response => response.json()).then((responseJson) => {
            if (responseJson.status === 'failure') {
                Alert.alert(
                    'FAILED',
                    'user already exist'
                );
            }
            else {
                Alert.alert(
                    'SUCCESS',
                    'click on login'
                );
            }
            console.log(responseJson);
        }
        ).catch((error) => {
            console.log(error);
        });
        Alert.alert(
            'SUCCESS',
            'click on login'
        );
    }
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.contents}>
                <TextInput
                    placeholder='username'
                    onChangeText={(val) => setUsername(val)}
                    style={styles.textInput}></TextInput>
                <TextInput
                    placeholder='contact'
                    keyboardType='numeric'
                    onChangeText={(val) => setContact(val)}
                    style={styles.textInput}></TextInput>
                <TextInput
                    placeholder='password'
                    keyboardType='visible-password'
                    onChangeText={(val) => setPassword(val)}
                    style={styles.textInput}></TextInput>
                <Button
                    title='Register'
                    onPress={registerUser}
                    color='grey' />
                <Text onPress={() => navigation.replace('Login')}>already registered?</Text>
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
    textInput: {
        marginBottom: '5%',
        borderWidth: 2,
        borderRadius: 15,
        padding: 10,
        borderColor: 'grey'
    }
});