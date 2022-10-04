import styled from 'styled-components';

export const TransactionsTable = styled.table`
  max-width: 350px;
  margin: 20px auto 0 auto;
`;

export const TableHead = styled.thead`
  text-transform: uppercase;
  background-color: ${props => props.theme.colors.green};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSizes.m};
`;

export const TableHeadItem = styled.th`
  padding: ${props => props.theme.space[4]}px;
`;

export const TableBody = styled.tbody`
  font-size: ${props => props.theme.fontSizes.s};
`;

export const TableBodyItem = styled.tr`
  :nth-of-type(2n) {
    background-color: ${props => props.theme.colors.lightGrey};
  }
`;

export const TableElement = styled.td`
   text-align: center;
   padding: ${props => props.theme.space[4]}px;
`;