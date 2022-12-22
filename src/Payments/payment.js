import styled from 'styled-components';

export const Title = styled.div`
  font-family: 'Roboto', sans-serif;
  font-size: 37px;
`;

export const Instructions = styled.h2`
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  color: #8E8E8E;
  margin-top: 37px;
`;

export const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;

  h2 {
    font-size: 16px;
  }

  h3 {
    color: #898989;
    font-size: 14px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Presencial = styled.div`
  height: 145px;
  width: 145px;
  border-radius: 20px;
  border: 1px solid #CECECE;
  margin: 17px 24px 7px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  background-color: ${(prop) => prop.selectPresencial === true ? '#FFEED2' : ''};
`;

export const Online = styled.div`
  height: 145px;
  width: 145px;
  border-radius: 20px;
  border: 1px solid #CECECE;
  margin: 17px 24px 7px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  background-color: ${(prop) => prop.selectOnline ? '#FFEED2' : ''};
`;

export const NoHotel = styled.div`
  height: 145px;
  width: 145px;
  border-radius: 20px;
  border: 1px solid #CECECE;
  margin: 17px 24px 7px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  background-color: ${(prop) => prop.selectNoHotel === true ? '#FFEED2' : ''};
`;

export const WithHotel = styled.div`
  height: 145px;
  width: 145px;
  border-radius: 20px;
  border: 1px solid #CECECE;
  margin: 17px 24px 7px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  cursor: pointer;
  background-color: ${(prop) => prop.selectWithHotel ? '#FFEED2' : ''};
`;

export const Button = styled.div`
  width: 162px;
  height: 37px;
  border-radius: 4px;
  background-color: #E0E0E0;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 17px;
`;
