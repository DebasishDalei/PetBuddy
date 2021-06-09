import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LogStack from './screens/main/logStack';
// import Test from './test';

export default function App() {
    return (
        <LogStack />
        // <Test />
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
