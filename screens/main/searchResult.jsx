import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Button, TouchableOpacity, ScrollView } from 'react-native';
import ResultCard from '../cards/resultCard';

export default function SearchResult({ navigation }) {
    const keyword = navigation.state.params.keyword;
    const [content, setContent] = useState(null);
    const [flag, setFlag] = useState(1);

    useEffect(() => {
        if (flag == 1) {
            fetch(
                'http://localhost/PetLove/getSearchResult.php', {
                // 'http://nitwhub.tech/PetLove/getSearchResult.php', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                },
                body: JSON.stringify({
                    keyword: keyword
                })
            }
            ).then(response => response.json()).then((responseJson) => {
                if (responseJson.length == 0)
                    setContent(<Text>No result found:(</Text>);
                else
                    setContent(
                        responseJson.map((val) =>
                            <TouchableOpacity key={val.transid}
                                onPress={() => navigation.navigate('Details', { val })}
                            >
                                <ResultCard data={val} />
                            </TouchableOpacity>
                        )
                    );
                setFlag(0);
                console.log(responseJson);
            }
            ).catch((error) => {
                console.log(error);
            });
        }
    })
    return (
        <View style={styles.content}>
            <TouchableOpacity
                style={{ backgroundColor: '#005580', paddingVertical: 20 }}
                onPress={() => navigation.navigate('Default')}>
                <Text style={{ color: 'white', fontWeight: 'bold', letterSpacing: '5', fontSize: 30, textAlign: 'center', textTransform: 'uppercase' }}>Back</Text>
            </TouchableOpacity>
            <ScrollView>
                <View style={{ flex: 1 }}>
                    {content}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'white'
    },
    searchResult: {
        flex: 1,
    },
});
