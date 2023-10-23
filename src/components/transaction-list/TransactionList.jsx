import { Transaction } from '../transaction/Transaction';
import PropTypes from 'prop-types';
import css from './TransactionLIst.module.css'

const TransactionList = ({transactions}) => (
  <div className="transactions">
    <table className={css.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
      {transactions.map(transaction => (
        <tr key={transaction.id}>
          <Transaction
            type = {transaction.type}
            amount = {transaction.amount}
            currency = {transaction.currency}
          />
        </tr>
      ))}

      </tbody>
    </table>
  </div>
);

TransactionList.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired
    }))
};

export {TransactionList};
