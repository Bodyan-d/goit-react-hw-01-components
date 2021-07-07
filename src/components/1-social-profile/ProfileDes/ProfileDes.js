import React from 'react';
import './ProfileDes.css';

export default function ProfileDescription({ name, tag, location }) {
  return (
    <ul className="description">
      <li className="description-item name">{name}</li>
      <li className="description-item tag">@{tag}</li>
      <li className="description-item location">{location}</li>
    </ul>
  );
}
