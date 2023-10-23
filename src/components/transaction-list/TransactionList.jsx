import { Transaction } from '../transaction/Transaction';

const TransactionList = ({transactions}) => (
  <div className="transactions">
    <table className="transaction-history">
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

export {TransactionList};
