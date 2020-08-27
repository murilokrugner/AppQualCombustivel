import React, {useCallback} from 'react';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

import { Container, Box, BoxItem, BoxButton, Description, BoxAds } from './styles'

import {
    AdMobBanner,
  } from 'react-native-admob'

import Gas from '../../assets/gas.jpg';
import Car from '../../assets/car.jpg';
import Liter from '../../assets/liter.jpg';
import Money from '../../assets/money.jpg';

function Home() {
    const {navigate} = useNavigation();

    const navigationToComparative = useCallback(() => {
        navigate('Comparative');
     }, [navigate])

     const navigationLiters = useCallback(() => {
        navigate('Liters');
     }, [navigate])

     const navigationToMoney = useCallback(() => {
        navigate('Money');
     }, [navigate])

     const navigationToCar = useCallback(() => {
        navigate('Car');
     }, [navigate])

    return(
        <Container>
            <Box>
                <BoxItem>
                    <BoxButton onPress={navigationToComparative}>
                        <Image style={{marginTop: 10}} source={Gas} />
                        <Description>Etanol vs Gasolina</Description>
                    </BoxButton>
                </BoxItem>
                <BoxItem>
                    <BoxButton onPress={navigationLiters}>
                        <Image style={{marginTop: 10}} source={Liter} />
                        <Description>Quantos litros</Description>
                    </BoxButton>
                </BoxItem>
                <BoxItem>
                    <BoxButton onPress={navigationToMoney}>                    
                        <Image style={{marginTop: 10}} source={Money} />
                        <Description>Quanto vou gastar</Description>
                    </BoxButton>
                </BoxItem>
                <BoxItem>
                    <BoxButton onPress={navigationToCar}>
                        <Image style={{marginTop: 10}} source={Car} />
                        <Description>Média de consumo</Description>
                    </BoxButton>
                </BoxItem>
            </Box>
            <BoxAds>
                <AdMobBanner
                    adSize="largeBanner"
                    adUnitID="ca-app-pub-2776609991840638/2937855696"                                
                />
            </BoxAds>
        </Container>
    )
}

export default Home;