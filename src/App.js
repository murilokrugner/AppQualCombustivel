import 'react-native-gesture-handler';
import React from 'react';
import codePush from 'react-native-code-push';

import {StatusBar, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import Routes from './routes';

function App() {
    return (
        <NavigationContainer>
            <StatusBar backgroundColor="#fff" barStyle="dark-content"/>
            <View style={{flex: 1, backgroundColor: "#fff"}}>
                <Routes />
            </View>
        </NavigationContainer>
    )
}

export default codePush({
    checkFrequency: codePush.CheckFrequency.ON_APP_RESUME,
})(App);