import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Register from './register';
import Login from './login';
import Home from './tabs/home';
import Post from './tabs/post';

const screens = {
    Login: {
        screen: Login
    },
    Register: {
        screen: Register
    },
    Home: {
        screen: Home
    },
    Post: {
        screen: Post
    },

}


const logStack = createStackNavigator(screens, { headerMode: 'none' });
export default createAppContainer(logStack);
