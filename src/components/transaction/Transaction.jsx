const Transaction = ({type, amount, currency}) => (
  <>
    <td>{type}</td>
    <td>{amount}</td>
    <td>{currency}</td>
  </>
);

export {Transaction};
