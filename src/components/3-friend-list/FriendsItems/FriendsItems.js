import React from 'react';
import './FriendsItems.css';

export default function FriendsItems({ friendsList }) {
  return (
    <>
      {friendsList.map(({ id, isOnline, avatar, name }) => {
        return (
          <li key={id} className="friend-item">
            <span
              className="friend-status"
              style={{ backgroundColor: isOnline ? 'green' : 'red' }}
            ></span>
            <img
              className="friend-avatar"
              src={avatar}
              alt="avatar"
              width="48"
            />
            <p className="friend-name">{name}</p>
          </li>
        );
      })}
    </>
  );
}
