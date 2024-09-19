import styled from 'styled-components/native';

export const Container = styled.View`
  height: 250px;
  padding-bottom: 14px;
  /* border: 1px solid red; */
`;

const Card = styled.View`
  margin: 14px;
  margin-right: 0;
  width: 300px;
  border-radius: 8px;
  padding: 14px;
  justify-content: center;
`;

export const CardTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: white;
`;

export const CardContent = styled.Text`
  font-size: 36px;
  font-weight: 300;
  color: white;
`;

export const CardBalance = styled(Card)`
  background-color: #3B3DBF;
`;

export const CardInflow = styled(Card)`
  background-color: #00B94A;
`;

export const CardOutflow = styled(Card)`
  background-color: #EF463A;
  margin-right: 14px;
`;