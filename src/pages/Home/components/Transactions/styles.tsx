import styled from 'styled-components/native';

export const Container = styled.View`
  /* height: 75%; */
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  background-color: white;
  padding: 16px 14px;
  box-shadow: 0px 0px 15px #10101090;
`;


export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;

export const HeaderTxt = styled.Text`
  font-size: 18px;
  font-weight: 700;
`;

export const Separator = styled.View`
  height: 18px;
`;

export const Transaction = styled.View`
  background-color: #F0F2FF;
  width: 100%;
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 8px;
  box-shadow: 2px 2px 8px #00000020
`;

export const TransactionWrapper = styled.View`
  gap: 8px;
`;

const TransactionType = styled.View`
    align-self: flex-start;
    width: 90px;
    flex-direction: row;
    align-items: center;
    gap: 2px;
    padding: 4px;
    border-radius: 4px;
`;

export const TransactionTypeIn = styled(TransactionType)`
  background-color: #00B94A;
`;

export const TransactionTypeOut = styled(TransactionType)`
  background-color: #EF463A;
`;

export const TransactionTypeTxt = styled.Text`
  color: white;
  font-size: 14px;
  font-style: italic;
`;

export const TransactionValue = styled.Text`
  font-size: 24px;
  font-weight: 400;
`;

export const BtnContainer = styled.View`
  justify-content: space-between;
`;