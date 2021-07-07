import React from 'react';
import './Avatar.css';

export default function Avatar({ avatar }) {
  return <img className="avatar" src={avatar} alt="avatar" />;
}
