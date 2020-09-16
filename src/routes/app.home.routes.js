import React from 'react';
import { createStackNavigator, HeaderBackButton } from '@react-navigation/stack';

import Home from '../pages/Home';
import Comparative from '../pages/Comparative';
import Car from '../pages/Car';
import Liters from '../pages/Liters';
import Money from '../pages/Money';

const Homepage = createStackNavigator();

export default HomeRoutes = () => (      
    <Homepage.Navigator
        screenOptions={{
            headerTintColor: '#000',
            headerTitleAlign: 'center',
            headerTitle: 'titulo',
            headerStyle: {
            },
            headerShown: true,
            cardStyle: { backgroundColor: '#fff' },
        }}
        initialRouteName="Home">
        <Homepage.Screen name="Home" component={Home} 
          options={{
              headerTitle: 'Menu',            
            }}
        />
        <Homepage.Screen name="Comparative" component={Comparative} 
          options={{
              headerTitle: 'Etanol vs Gasolina',  
              headerBackTitle: "Voltar",          
            }}
        />
        <Homepage.Screen name="Car" component={Car} 
          options={{
              headerTitle: 'Média de consumo',  
              headerBackTitle: "Voltar",          
            }}
        />
        <Homepage.Screen name="Liters" component={Liters} 
          options={{
              headerTitle: 'Quantos litros',  
              headerBackTitle: "Voltar",          
            }}
        />
        <Homepage.Screen name="Money" component={Money} 
          options={{
              headerTitle: 'Quanto vou gastar',  
              headerBackTitle: "Voltar",          
            }}
        />
    </Homepage.Navigator>                
)


