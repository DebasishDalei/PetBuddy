import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import { AntDesign, Foundation } from '@expo/vector-icons';
import SubmissionCard from '../../cards/submissionCard';

export default function Profile({ username, password, contact }) {
    const [contactFlag, setContactFlag] = useState(false);
    const [passwordFlag, setPasswordFlag] = useState(false);
    const [newPassword, setPassword] = useState(password);
    const [newContact, setContact] = useState(contact);
    const [data, setData] = useState([]);
    const [flag, setFlag] = useState(1);

    useEffect(() => {
        if (flag == 1) {
            fetch(
                'http://localhost/PetLove/submissions.php', {
                // 'http://nitwhub.tech/PetLove/submissions.php', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    username: username
                })
            }
            ).then(response => response.json()).then((responseJson) => {
                setFlag(0);
                setData(responseJson);
                // console.log(responseJson);
            }
            ).catch((error) => {
                console.log(error);
            });
        }
    })

    const remove = (id) => {
        fetch(
            'http://localhost/PetLove/delete.php', {
            // 'http://nitwhub.tech/PetLove/delete.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: JSON.stringify({
                transid: id
            })
        }
        ).then(response => response.json()).then((responseJson) => {
            // Alert.alert(
            //     'SUCCESS',
            //     'Profile updated'
            // );
            console.log(responseJson);
        }
        ).catch((error) => {
            console.log(error);
        });
        setData((prevData) => {
            return prevData.filter((val) => val.transid != id)
        });
    }

    const update = () => {
        fetch(
            'http://localhost/PetLove/update.php', {
            // 'http://nitwhub.tech/PetLove/update.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
            },
            body: JSON.stringify({
                username: username,
                contact: newContact,
                password: newPassword
            })
        }
        ).then(response => response.json()).then((responseJson) => {
            // Alert.alert(
            //     'SUCCESS',
            //     'Profile updated'
            // );
            console.log(responseJson);
        }
        ).catch((error) => {
            console.log(error);
        });
    }
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <View style={{ borderBottomWidth: 2 }}>
                <Image
                    style={styles.image}
                    source={require('../../../assets/profile_pic.JPG')} />
                <Text style={styles.username}>{username}</Text>
            </View>
            <View style={styles.container}>
                <AntDesign name="phone" size={40} color="black" style={styles.icon} />
                <TextInput style={styles.inputText} defaultValue={contact} onChangeText={(val) => setContact(val)} editable={contactFlag} />
                <AntDesign name="edit" size={24} color="black" onPress={() => setContactFlag(true)} />
            </View>
            <View style={styles.container}>
                <Foundation name="key" size={40} color="black" style={styles.icon} />
                <TextInput style={styles.inputText} defaultValue={password} onChangeText={(val) => setPassword(val)} editable={passwordFlag} />
                <AntDesign name="edit" size={24} color="black" onPress={() => setPasswordFlag(true)} />
            </View>
            <TouchableOpacity onPress={update} style={styles.button}>
                <Text style={styles.text}>SAVE</Text>
            </TouchableOpacity>
            <Text style={{ color: '#005580', fontSize: 30, marginTop: 10 }}>My Submissions</Text>
            <ScrollView horizontal={true}>
                <View style={{ width: 600, height: 300, flexDirection: 'row' }}>
                    {
                        data.map((val) => {
                            return <SubmissionCard key={val.transid} data={val} remove={remove} />
                        })
                    }</View>
            </ScrollView>
            <AntDesign name="logout" size={60} color="#991f00" style={{ position: 'absolute', left: 320, top: 1100 }} />
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: 400,
        height: 400,
        borderRadius: 200,
        marginTop: 50
    },
    username: {
        fontSize: 40,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: 2,
        color: '#2eb8b8'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10
    },
    icon: {
        color: 'green'
    },
    inputText: {
        textAlign: 'center',
        fontSize: 24,
        paddingHorizontal: 10,
        borderBottomWidth: 2
    },
    button: {
        backgroundColor: '#ccf2ff',
        borderWidth: 2,
        borderColor: '#005e80',
        borderRadius: 5,
        marginTop: 30,
    },
    text: {
        fontSize: 30,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        letterSpacing: 5,
        color: '#00131a'
    }
});
