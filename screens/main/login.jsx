import React, { useState } from 'react';
import {
    StyleSheet, View, Text, TextInput, Button,
    TouchableWithoutFeedback, Keyboard, Alert, TextComponent
} from 'react-native';

export default function Login({ navigation }) {
    const [username, setUsername] = useState('Debasish Dalei');
    const [password, setPassword] = useState('password');

    const loginUser = () => {
        fetch(
            'http://localhost/PetLove/login.php', {
            // 'http://nitwhub.tech/PetLove/login.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }
        ).then(response => response.json()).then((responseJson) => {
            if (responseJson.status === 'failure') {
                Alert.alert(
                    'FAILED',
                    'check credentials or register'
                );
            }
            else {
                Alert.alert(
                    'SUCCESS',
                    'welcome' + responseJson.username
                );
                navigation.replace('Home', responseJson);
            }
            console.log(responseJson);
        }
        ).catch((error) => {
            console.log(error);
        });
    }
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.contents}>
                <TextInput
                    placeholder='username'
                    onChangeText={(val) => setUsername(val)}
                    style={styles.textInput}></TextInput>
                <TextInput
                    placeholder='password'
                    keyboardType='visible-password'
                    onChangeText={(val) => setPassword(val)}
                    style={styles.textInput}></TextInput>
                <Button
                    title='Login'
                    onPress={loginUser}
                    color='grey' />
                <Text onPress={() => navigation.replace('Register')}>new user?</Text>
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
}
);