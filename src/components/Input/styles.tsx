import styled from "styled-components/native";

export const StyledTextInput = styled.TextInput`
    background-color: ${({ theme }) => theme.colors.background.light};
    width: 100%;
    padding: 14px 12px;
    font-size: 18px;
    border-radius: 4px;
`;

export const Label = styled.Text`
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.text.main};
`;