import React from 'react';
import TransactionHead from './TransactionHead/TransactionHead';
import TransactionItem from './TransactionItem/TransactionItem';
import './TransactionHistory.css';

export default function TransactionHistory({ items }) {
  return (
    <table className="transaction-history">
      <TransactionHead />
      <TransactionItem items={items} />
    </table>
  );
}
