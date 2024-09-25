import styled from "styled-components/native";

export const StyledTextInput = styled.TextInput`
    background-color: ${({ theme }) => theme.colors.background.light};
    width: 100%;
    padding-top: ${({ theme }) => theme.sizes.spacing}px;
    padding-bottom: ${({ theme }) => theme.sizes.spacing}px;
    padding-right: ${({ theme }) => theme.sizes.font.small}px;
    padding-left: ${({ theme }) => theme.sizes.font.small}px;
    font-size: ${({ theme }) => theme.sizes.font.body}px;
    border-radius: ${({ theme }) => theme.sizes.borderRadius.small}px;
`;

export const Label = styled.Text`
  font-size: ${({ theme }) => theme.sizes.font.body}px;
  font-weight: 600;
  margin-bottom: 10px;
  color: ${({ theme }) => theme.colors.text.main};
`;