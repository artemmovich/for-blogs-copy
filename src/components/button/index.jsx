import React from 'react'

import './index.scss';

const Button = ({ text }) => {
  return (
    <button className="button">
      {text}
    </button>
  );
};

export default Button;
