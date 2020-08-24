import React, {useRef, useState} from 'react';
import {KeyboardAvoidingView, ScrollView, Alert} from 'react-native';
import { TextInputMask } from 'react-native-masked-text'
import {Container, TextTitle, BoxButton, BoxResult, TextResult} from './styles';

import Button from '../../components/Button';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

function Car() {
    const formRef = useRef(null);

    const [loading, setLoading] = useState(false);

    const [inputKmInicial, setInputKmInicial] = useState();
    const [inputKmFinal, setInputKmFinal] = useState();
    const [inputLitros, setInputLitros] = useState();

    const [result, setResult] = useState();

    function handleSubmit() {
        setLoading(true);

        if (inputKmInicial === undefined) {
            Alert.alert('Por favor, preenche todos os campos');
            setLoading(false);
            return;
        }
    
        if (inputKmFinal === undefined) {
            Alert.alert('Por favor, preenche todos os campos');
            setLoading(false);
            return;
        }

        if (inputLitros === undefined) {
            Alert.alert('Por favor, preenche todos os campos');
            setLoading(false);
            return;
        }

        if (parseFloat(inputKmInicial) < parseFloat(inputKmFinal)) {
            const resultKm = ((parseFloat(inputKmInicial) - parseFloat(inputKmFinal) * 1) * -1 / parseFloat(inputLitros));

            setResult(resultKm.toString());
       
            setLoading(false);
        } else {
            const resultKm = ((parseFloat(inputKmInicial) - parseFloat(inputKmFinal)) / parseFloat(inputLitros));

            setResult(resultKm.toString());
       
            setLoading(false);
        }           
    }

    function handleClear() {
        setInputKmInicial();
        setInputKmFinal();
        setInputLitros();
    }

    return (
        <Container>
            <KeyboardAvoidingView style={{flex: 1}}>
            <ScrollView style={{flex: 1}}>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <TextTitle>Km Inicial </TextTitle>
                    <TextInputMask
                        type={'only-numbers'}
                        value={inputKmInicial}
                        onChangeText={text => {
                            setInputKmInicial(text);
                        }}                        
                        style={{
                            backgroundColor: '#FAFBFD',
                            width: 350,
                            borderRadius: 20,
                            padding: 15,
                            fontSize: 18,
                            color: '#000',
                        }}
                        placeholder={'Exemplo: 10'}
                        placeholderTextColor={'#000'}

                        />    
                    <TextTitle>Km Final</TextTitle>
                    <TextInputMask
                        type={'only-numbers'}
                        value={inputKmFinal}
                        onChangeText={text => {
                            setInputKmFinal(text);
                        }}                        
                        style={{
                            backgroundColor: '#FAFBFD',
                            width: 350,
                            borderRadius: 20,
                            padding: 15,
                            fontSize: 18,
                            color: '#000',
                        }}
                        placeholder={'Exemplo: 100'}
                        placeholderTextColor={'#000'}

                        />
                    <TextTitle>Quantos litros foi abastecido?</TextTitle>
                    <TextInputMask
                        type={'only-numbers'}
                        value={inputLitros}
                        onChangeText={text => {
                            setInputLitros(text);
                        }}
                        style={{
                            backgroundColor: '#FAFBFD',
                            width: 350,
                            borderRadius: 20,
                            padding: 15,
                            fontSize: 18,
                            color: '#000',
                        }}
                        placeholder={'Exemplo: 20'}
                        placeholderTextColor={'#000'}

                        /> 
                    <BoxButton>
                        <Button loading={loading} 
                            onPress={() => {formRef.current.submitForm()}} style={{width: 300}}>Calcular</Button>
                        <Button onPress={handleClear} style={{width: 300}}>Limpar</Button>
                    </BoxButton>
                </Form>  

                <BoxResult>                    
                    {result !== undefined && (
                        <>
                            <TextResult>Seu veículo está fazendo: {result} km por litro </TextResult>
                            
                        </>
                    )}
                </BoxResult>                 
            </ScrollView>
            </KeyboardAvoidingView>
        </Container>
    );
}

export default Car;