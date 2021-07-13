import React from 'react';
import PropTypes from 'prop-types';
import './TransactionItem.css';

export default function TransactionItem({ items }) {
  return (
    <tbody>
      {items.map(({ type, amount, currency, id }) => (
        <tr className="transaction-items" key={id}>
          <td className="transaction-item item-title">{ucFirst(type)}</td>
          <td className="transaction-item">{amount}</td>
          <td className="transaction-item">{currency}</td>
        </tr>
      ))}
    </tbody>
  );
}

function ucFirst(str) {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
}

TransactionItem.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
