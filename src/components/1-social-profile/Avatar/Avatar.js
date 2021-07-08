import React from 'react';
import PropTypes from 'prop-types';
import './Avatar.css';

export default function Avatar({ avatar }) {
  return <img className="avatar" src={avatar} alt="avatar" />;
}

Avatar.defaultProps = {
  avatar:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnSi-Gltn2w68Fn37i4rPk5IAW5xv9Xehwww&usqp=CAU',
};

Avatar.propTypes = {
  avatar: PropTypes.string,
};
