import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
    flex: 1;
    height: 100%;

    margin-top: 50px;

    flex-direction: column;
    
    align-items: center;

`;

export const Box = styled.View`
   flex-direction: row;
   justify-content: space-around;
   align-items: center;
   flex-wrap: wrap;
   

`;

export const BoxItem = styled.View`
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 180px;
    height: 150px;
    margin-top: 20px;

    color: #000;

    border : 0.7px;
    border-radius: 20px;

    border-color: #00004F;

`;

export const BoxButton = styled(RectButton)`
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 175px;
    height: 145px;
    border : 0.7px;
    border-radius: 20px;
`;

export const Description = styled.Text`
    margin-top: 15px;
    font-size: 18px;
`;