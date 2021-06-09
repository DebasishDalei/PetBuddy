import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, RefreshControl, TextInput } from 'react-native';
import ImgCard from '../../cards/imgCard';
import NoImgCard from '../../cards/noImgCard';
import { Ionicons } from '@expo/vector-icons';

export default function Default({ navigation }) {
    const [data, setData] = useState([]);
    const [flag, setFlag] = useState(1);
    const [refFlag, setRefFlag] = useState(true);
    const [keyword, setKeyword] = useState('');

    useEffect(() => {
        if (flag == 1) {
            fetch(
                'http://localhost/PetLove/all.php', {
                // 'http://nitwhub.tech/PetLove/all.php', {
                method: 'GET',
                headers: {
                    Accept: 'application/json',
                }
            }
            ).then(response => response.json()).then((responseJson) => {
                // console.log("Fetch");
                setFlag(0);
                setData(responseJson);
            }
            ).catch((error) => {
                console.log(error);
            });
        }
    })

    const refresh = () => {
        setRefFlag(true);
        fetch(
            'http://localhost/PetLove/getPriced.php', {
            // 'http://nitwhub.tech/PetLove/getPriced.php', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            }
        }
        ).then(response => response.json()).then((responseJson) => {
            // console.log("Fetch");
            setFlag(0);
            setData(responseJson);
        }
        ).catch((error) => {
            console.log(error);
        });
        setRefFlag(false);
    }


    return (
        <View style={styles.content}>
            <View style={styles.searchBar}>
                <TextInput style={styles.serachBox} onChangeText={(val) => setKeyword(val)}></TextInput>
                <Ionicons name="search-circle" size={70} color="white" onPress={() => navigation.navigate('SearchResult', { keyword })} style={{ marginTop: 15 }} />
            </View>
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={refFlag}
                        onRefresh={refresh} />}
                style={{ marginVertical: 5 }}>
                {data.map((val) => {
                    return (val.type === 'sell') ?
                        <ImgCard key={val.transid} data={val} />
                        :
                        <NoImgCard key={val.transid} data={val} />
                })}
            </ScrollView>
        </View >
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: ' #e6ecff'
    },
    searchBar: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#005580'
    },
    serachBox: {
        height: 70,
        width: 700,
        borderWidth: 1,
        borderRadius: 35,
        borderColor: 'white',
        marginTop: 25,
        marginBottom: 20,
        paddingHorizontal: 10,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 3,
        color: 'white'
        // backgroundColor: 'white'
    }
});
