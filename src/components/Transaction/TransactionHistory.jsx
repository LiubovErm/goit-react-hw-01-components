import PropTypes from 'prop-types';
import {
  TransactionsTable,
  TableHead,
  TableHeadItem,
  TableBody,
  TableBodyItem,
  TableElement,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionsTable>
      <TableHead>
        <tr>
          <TableHeadItem>Type</TableHeadItem>
          <TableHeadItem>Amount</TableHeadItem>
          <TableHeadItem>Currency</TableHeadItem>
        </tr>
      </TableHead>
      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <TableBodyItem key={id}>
            <TableElement>{type}</TableElement>
            <TableElement>{amount}</TableElement>
            <TableElement>{currency}</TableElement>
          </TableBodyItem>
        ))}
      </TableBody>
    </TransactionsTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};