import styled from 'styled-components';

export const Content = styled.div `
    height: 220px;
    width: 800px;
    margin-top: 33px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const Room = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 16px 0 16px;
    width: 190px;
    height: 45px;
    border: 1px solid #CECECE;
    border-radius: 10px;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    background-color: ${(props) => props.choosedRoom  === props.index ? '#FFEED2' : '#EBEBEB'};

    ion-icon {
        height: 21px;
    }
`;

export const Container = styled.div`
    width: 50px;
    display: flex;
    flex-direction: row;
`;

export const Button = styled.div`
    width: 182px;
    height: 37px;
    border: 1px solid #E0E0E0;
    border-radius: 4px;
    background: #E0E0E0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 400;
    font-family: 'Roboto', sans-serif;
    margin-top: 46px;
    cursor: pointer;
`;
