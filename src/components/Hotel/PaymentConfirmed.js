import styled from 'styled-components';

export const Title = styled.div` 
    width: auto;
    height: 40px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 40px;
    color: #000000;
`;

export const Subtitle = styled.div`
    width: auto;
    height: 23px;
    margin-top: 30px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;
    color: #8E8E8E;
`;

export const CardHotel = styled.div`
    width: 196px;
    height: 264px;
    background: ${props => props.color};
    border-radius: 10px;
    padding: 20px;
    margin-top: 20px;
    margin-right: 20px;
    cursor: pointer;

    img{
        width: 158px;
        height: 109px;
        border-radius: 5px;
    }

    h3{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        color: #343434;
        margin-top: 10px;
    }

`;

export const ContainerCard = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
`;

