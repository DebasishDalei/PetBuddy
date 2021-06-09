import React, { useState, useEffect } from 'react';
import {
    StyleSheet, View, Text, TouchableOpacity, Image
} from 'react-native';
import BuyForm from '../../forms/buyForm';
import SellForm from '../../forms/sellForm';
import AdoptForm from '../../forms/adoptForm';
import DonateForm from '../../forms/donateForm';

export default function Post({ username, contact }) {
    const [form, setForm] = useState();
    const [flag, setFlag] = useState(true);
    const [flag1, setFlag1] = useState(false);
    const [flag2, setFlag2] = useState(false);
    const [flag3, setFlag3] = useState(false);
    const [flag4, setFlag4] = useState(false);
    useEffect(() => {
        if (flag) {
            setFlag(false);
            setForm(() => { return <Text style={{ textAlign: 'center', color: '#005580', marginTop: 400, fontSize: 30 }}>select your post type...</Text> });
        }
    })


    const buy = () => {
        setFlag1(true);
        setFlag2(false);
        setFlag3(false);
        setFlag4(false);
        setForm(() => { return <BuyForm username={username} contact={contact} />; });
        // console.log('buy');
    };
    const sell = () => {
        setFlag1(false);
        setFlag2(true);
        setFlag3(false);
        setFlag4(false);
        setForm(() => { return <SellForm username={username} contact={contact} />; });
        // console.log('sell');
    };
    const adopt = () => {
        setFlag1(false);
        setFlag2(false);
        setFlag3(true);
        setFlag4(false);
        setForm(() => { return <AdoptForm username={username} contact={contact} />; });
        // console.log('adopt');
    };
    const donate = () => {
        setFlag1(false);
        setFlag2(false);
        setFlag3(false);
        setFlag4(true);
        setForm(() => { return <DonateForm username={username} contact={contact} />; });
        // console.log('donate');
    };
    return (
        <View>
            <View style={styles.row}>
                <TouchableOpacity onPress={buy} style={[styles.icons, { backgroundColor: (flag1 ? '#005580' : 'white') }]}>
                    <Image
                        style={{
                            width: 50,
                            height: 50,
                            marginLeft: 50
                        }}
                        source={require('../../../assets/post-icons/buy.png')} />
                    <Text style={{ textAlign: 'center', fontSize: 30, marginTop: 5 }}>BUY</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={sell} style={[styles.icons, { backgroundColor: (flag2 ? '#005580' : 'white') }]}>
                    <Image
                        style={{
                            width: 50,
                            height: 50,
                            marginLeft: 50
                        }}
                        source={require('../../../assets/post-icons/sell.png')} />
                    <Text style={{ textAlign: 'center', fontSize: 30, marginTop: 5 }}>SELL</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={adopt} style={[styles.icons, { backgroundColor: (flag3 ? '#005580' : 'white') }]}>
                    <Image
                        style={{
                            width: 50,
                            height: 50,
                            marginLeft: 50
                        }}
                        source={require('../../../assets/post-icons/adopt.png')} />
                    <Text style={{ textAlign: 'center', fontSize: 30, marginTop: 5 }}>ADOPT</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={donate} style={[styles.icons, { backgroundColor: (flag4 ? '#005580' : 'white') }]}>
                    <Image
                        style={{
                            width: 50,
                            height: 50,
                            marginLeft: 50
                        }}
                        source={require('../../../assets/post-icons/donate.png')} />
                    <Text style={{ textAlign: 'center', fontSize: 30, marginTop: 5 }}>DONATE</Text>
                </TouchableOpacity>
            </View>
            {form}
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        borderBottomWidth: 2,
        borderColor: '#ccccff',
        paddingVertical: 10
    },
    icons: {
        width: 170,
        height: 170,
        borderRadius: 85,
        justifyContent: 'center'
    }
});
