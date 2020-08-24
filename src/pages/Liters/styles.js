import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 20px;
`;

export const TextTitle = styled.Text`
    font-size: 16px;
    font-weight: bold;

    margin-top: 40px;
    margin-bottom: 10px;
`;

export const BoxButton = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
`;

export const BoxResult = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;


    margin-top: 50px;
`;

export const TextResult = styled.Text`
    margin-top: 10px;
    font-size: 18px;
    font-weight: bold;
`;