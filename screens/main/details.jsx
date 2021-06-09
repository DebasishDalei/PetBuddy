import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image, Button } from 'react-native';
import ImgCard from '../cards/imgCard';
import NoImgCard from '../cards/noImgCard';

export default function Details({ navigation }) {
    const [data, setData] = useState(navigation.state.params.val);

    return (
        <View style={{ flex: 1 }}>
            <TouchableOpacity
                style={{ backgroundColor: '#005580', paddingVertical: 20 }}
                onPress={() => navigation.navigate('SearchResult')}>
                <Text style={{ color: 'white', fontWeight: 'bold', letterSpacing: '5', fontSize: 30, textAlign: 'center', textTransform: 'uppercase' }}>Back</Text>
            </TouchableOpacity>
            {data.type == 'sell' || data.type == 'donate' ? < ImgCard data={data} /> : <NoImgCard data={data} />}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
    },
    head: {
        flexDirection: 'row',
        justifyContent: 'flex-start'
    },
    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    detailBox: {
        width: 290,
        height: 150
    }
});