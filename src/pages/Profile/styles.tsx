import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
	padding: 16px;
    margin-block: 16px;
    flex: 1;
    justify-content: space-between;
`;

export const StyledText = styled.Text`
  font-size: 20px;
  text-align: center;
  line-height: 28px;
`;

export const Title = styled(StyledText)`
  font-weight: 700;
  margin-top: 80px;
`;