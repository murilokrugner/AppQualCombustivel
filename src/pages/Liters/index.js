import React, {useRef, useState} from 'react';
import {ScrollView, Alert, Image} from 'react-native';
import { TextInputMask } from 'react-native-masked-text'
import {Container, TextTitle, BoxButton, BoxResult, TextResult} from './styles';

import Button from '../../components/Button';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

function Liters() {
    const formRef = useRef(null);

    const [loading, setLoading] = useState(false);

    const [inputAbastecer, setInputAbastecer] = useState();
    const [inputPreco, setInputPreco] = useState();

    const [result, setResult] = useState();

    function handleSubmit() {
        setLoading(true);

        if (inputAbastecer === undefined) {
            Alert.alert('Por favor, preenche todos os campos');
            setLoading(false);
            return;
        }

        if (inputPreco === undefined) {
            Alert.alert('Por favor, preenche todos os campos');
            setLoading(false);
            return;
        }

        const value = parseFloat(inputAbastecer) / parseFloat(inputPreco);

        setResult(value.toString());

        setLoading(false);
    }

    function handleClear() {
        setInputAbastecer();
        setInputPreco();
    }

    return (
        <Container>
            <ScrollView style={{flex: 1}}>
                <Form ref={formRef} onSubmit={handleSubmit}>
                    <TextTitle>Valor a abastecer</TextTitle>
                    <TextInputMask
                        type={'money'}
                        value={inputAbastecer}
                        onChangeText={text => {
                            setInputAbastecer(text);
                        }}
                        options={{
                            precision: 2,
                            separator: ',',
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
                    <TextTitle>Preço do combustível</TextTitle>
                    <TextInputMask
                        type={'money'}
                        value={inputPreco}
                        onChangeText={text => {
                            setInputPreco(text);
                        }}
                        options={{
                            precision: 2,
                            separator: ',',
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
                    {result !== undefined && (
                        <>
                            <TextResult>Quantidade de litros: </TextResult>
                            <TextResult>{{result}}</TextResult>
                        </>
                    )}
                </BoxResult>                 
            </ScrollView>
        </Container>
    );
}

export default Liters;