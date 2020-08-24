import React, {useCallback} from 'react';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { useNavigation } from '@react-navigation/native';

import { Container, Box, BoxItem, BoxButton, Description } from './styles'

import Gas from '../../assets/gas.png';
import Car from '../../assets/car.png';
import Liter from '../../assets/liter.png';
import Money from '../../assets/money.png';

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
        </Container>
    )
}

export default Home;