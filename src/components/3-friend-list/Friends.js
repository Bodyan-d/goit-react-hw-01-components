import React from 'react';
import FriendsItems from './FriendsItems/FriendsItems';
import './Friends.css'

export default function Friends({ friendsList }) {
  return (
    <ul className="friends-list">
      <FriendsItems friendsList={friendsList} />
    </ul>
  );
}
