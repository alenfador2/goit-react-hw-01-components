import React from 'react';
import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';


const TransactionHistory = ({items}) => {
    return (<table className={css.transaction_history}>
  <thead className={css.transaction_header}>
    <tr >
      <th className={css.header_item}>Type</th>
      <th className={css.header_item}>Amount</th>
      <th className={css.header_item}>Currency</th>
    </tr>
  </thead>

  <tbody>
            {items.map(({ id, type, amount, currency }) => 
        (<tr className={css.item} key={id}>
            <td className={css.item_data}>{type}</td>
            <td className={css.item_data}>{amount}</td>
            <td className={css.item_data}>{currency}</td>
    </tr>
    ))}
  </tbody>
</table>)
}
export default TransactionHistory

TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired,
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired
}
