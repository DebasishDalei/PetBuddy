import React, { useState } from 'react';
import { StyleSheet, Image, View, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStack from '../homeStack';
import Post from './post';
import Profile from '../tabs/profile';

export default function Home({ navigation }) {
    const username = navigation.state.params.username;
    const contact = navigation.state.params.contact;
    const password = navigation.state.params.password;

    const Tab = createBottomTabNavigator();

    const homeStack = () => {
        return <HomeStack />;
    }

    const post = () => {
        return (
            <Post username={username} contact={contact} />
        );
    }

    const profile = () => {
        return (<Profile username={username} contact={contact} password={password} />
        );
    }
    return (
        < NavigationContainer >
            <Tab.Navigator
                tabBarOptions={{
                    showLabel: false,
                    style: styles.tabBar
                }}>
                <Tab.Screen
                    name="DEFAULT"
                    component={homeStack}
                    options={{
                        tabBarIcon: ({ focused }) =>
                            <Image
                                style={{
                                    width: 50,
                                    height: 50,
                                    tintColor: focused ? 'white' : null
                                }}
                                source={require('../../../assets/navigation-icons/home.png')} />
                    }}
                />
                <Tab.Screen
                    name="POST"
                    component={post}
                    options={{
                        tabBarIcon: ({ focused }) =>
                            <Image
                                style={{
                                    width: 50,
                                    height: 50,
                                    tintColor: focused ? 'white' : null
                                }}
                                source={require('../../../assets/navigation-icons/post.png')} />
                    }}
                />

                <Tab.Screen
                    name="PROFILE"
                    component={profile}
                    options={{
                        tabBarIcon: ({ focused }) =>
                            <Image
                                style={{
                                    width: 50,
                                    height: 50,
                                    tintColor: focused ? 'white' : null
                                }}
                                source={require('../../../assets/navigation-icons/profile.png')} />
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer >
    );
}

const styles = StyleSheet.create({
    tabBar: {
        height: 100,
        backgroundColor: '#005580',
        marginHorizontal: 10,
        marginBottom: 10,
        borderRadius: 50,
        borderTopWidth: 2,
        borderTopColor: '#005580',
        elevation: 10,
        shadowColor: '#ccccff',
        shadowOffset: { height: 3, width: 3 },
    },
});
