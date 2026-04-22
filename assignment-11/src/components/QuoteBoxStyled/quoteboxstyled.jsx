import styled from 'styled-components';

const Box = styled.div`
  background-color: #FEEBED;
  padding: 20px;
  border-radius: 12px;
  font-family: Arial, sans-serif;
  width: 300px;
  margin: 10px;
`;

const Text = styled.p`
  font-size: 16px;
  color: #543B37;
`;

const Author = styled.p`
  font-size: 14px;
  color: #E73B68;
  text-align: right;
`;

function QuoteBoxStyled() {
  return (
    <Box>
      <Text>
        "The only limit to our realization of tomorrow is our doubts of today."
      </Text>
      <Author>- Franklin D. Roosevelt</Author>
    </Box>
  );
}

export default QuoteBoxStyled;