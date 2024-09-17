import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  padding: 14px;
  /* border: 1px solid red; */
`;

const Card = styled.View`
  width: 300px;
  height: 160px;
  border-radius: 8px;
  padding: 14px;
  justify-content: center;
  margin-right: 14px;
`;

export const CardTitle = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: white;
`;

export const CardContent = styled.Text`
  font-size: 32px;
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
`;