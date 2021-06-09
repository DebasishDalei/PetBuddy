import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Default from './tabs/default';
import SearchResult from './searchResult';
import Details from './details';

const screens = {
    Default: {
        screen: Default
    },
    SearchResult: {
        screen: SearchResult
    },
    Details: {
        screen: Details
    }
}


const homeStack = createStackNavigator(screens, { headerMode: 'none' });
export default createAppContainer(homeStack);
