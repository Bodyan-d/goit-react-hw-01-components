import React from 'react';
import './TransactionHead.css';

export default function TransactionHead(props) {
  return (
    <thead>
      <tr>
        <th className="transaction-head">Type</th>
        <th className="transaction-head">Amount</th>
        <th className="transaction-head">Currency</th>
      </tr>
    </thead>
  );
}
