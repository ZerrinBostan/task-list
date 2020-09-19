import React from 'react';

type ChipsProps = {
  text: string;
};

const Chips = ({ text }: ChipsProps) => (
  <span className="user-information__verified">{text}</span>
);
export default Chips;
