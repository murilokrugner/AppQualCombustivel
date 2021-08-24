import React, {useRef, useState} from 'react';
import {KeyboardAvoidingView, ScrollView, Alert, Image} from 'react-native';
import { TextInputMask } from 'react-native-masked-text'
import {Container, TextTitle, BoxButton, BoxResult, TextResult, BoxAds} from './styles';

import Etanol from '../../assets/etanol.jpg';
import Gasolina from '../../assets/gasolina.jpg';

import Button from '../../components/Button';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import {
    AdMobBanner,
  } from 'react-native-admob'

function Comparative() {
    const formRef = useRef(null);

    const [loading, setLoading] = useState(false);

    const [inputEtanol, setInputEtanol] = useState();
    const [inputGasolina, setInputGasolina] = useState();

    const [combustivel, setCombustivel] = useState(-1);

    function handleSubmit() {
        setLoading(true);

        if (inputEtanol === undefined) {
            Alert.alert('Por favor, preenche todos os campos');
            setLoading(false);
            return;
        }

        if (inputGasolina === undefined) {
            Alert.alert('Por favor, preenche todos os campos');
            setLoading(false);
            return;
        }

        const etanol = inputEtanol.slice(2);
        const gasolina = inputGasolina.slice(2);

        const result = parseFloat(etanol) / parseFloat(gasolina);
    
        if (result <= 0.7) {
            setCombustivel(1);
            setLoading(false);
            
        } else {
            setCombustivel(2);
            setLoading(false);            
        }
    }

    function handleClear() {
        setInputEtanol();
        setInputGasolina();

        setCombustivel(-1);
    }

    return (
        <Container>
            <KeyboardAvoidingView style={{flex : 1}}>
            <ScrollView style={{flex: 1}}>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <TextTitle>Preço do Etanol</TextTitle>
                    <TextInputMask
                        type={'money'}
                        value={inputEtanol}
                        onChangeText={text => {
                            setInputEtanol(text);
                        }}
                        options={{
                            precision: 2,
                            separator: '.',
                            delimiter: '.',
                            unit: 'R$',
                            suffixUnit: '',
                        }}
                        style={{
                            backgroundColor: '#FAFBFD',
                            width: 350,
                            borderRadius: 20,
                            padding: 15,
                            fontSize: 18,
                            color: '#000',
                        }}
                        placeholder={'Valor R$'}
                        placeholderTextColor={'#000'}

                        />    
                    <TextTitle>Preço da gasolina</TextTitle>
                    <TextInputMask
                        type={'money'}
                        value={inputGasolina}
                        onChangeText={text => {
                            setInputGasolina(text);
                        }}
                        options={{
                            precision: 2,
                            separator: '.',
                            delimiter: '.',
                            unit: 'R$',
                            suffixUnit: '',
                        }}
                        style={{
                            backgroundColor: '#FAFBFD',
                            width: 350,
                            borderRadius: 20,
                            padding: 15,
                            fontSize: 18,
                            color: '#000',
                        }}
                        placeholder={'Valor R$'}
                        placeholderTextColor={'#000'}

                        /> 
                    <BoxButton>
                        <Button loading={loading} 
                            onPress={() => {formRef.current.submitForm()}} style={{width: 300}}>Calcular</Button>
                        <Button onPress={handleClear} style={{width: 300}}>Limpar</Button>
                    </BoxButton>
                </Form>  

                <BoxResult>
                    {combustivel  === 1 && (
                        <>
                        <TextResult>O melhor combustível para abastecer é o: </TextResult>
                        <Image style={{marginTop: 20, width: 200, height: 180}} source={Etanol} />
                        </>
                    )}
                    {combustivel === 2 && (
                        <>
                        <TextResult>O melhor combustível para abastecer é a: </TextResult>
                        <Image style={{marginTop: 20}} source={Gasolina} />
                        </>
                    )}
                </BoxResult>  
                <BoxAds>
                    <AdMobBanner
                        adSize="largeBanner"
                         adUnitID="ca-app-pub-4499612911905101/5535264373"                                 
                    />
                </BoxAds>             
            </ScrollView>
        </KeyboardAvoidingView>
        </Container>
    );
}

export default Comparative;