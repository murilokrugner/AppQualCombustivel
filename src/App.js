import 'react-native-gesture-handler';

import React from 'react';
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

export default App;