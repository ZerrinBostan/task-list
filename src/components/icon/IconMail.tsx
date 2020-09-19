import React from 'react';

type IconProps = {
  width: number;
  height: number;
  fill: string;
};

const IconMail = (props: IconProps) => {
  const { fill } = props;
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      {...props}
    >
      <title>mail</title>
      <path
        fill="none"
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke-miterlimit="4"
        stroke-width="2.6667"
        stroke={fill}
        d="M5.333 5.333h21.333c1.467 0 2.667 1.2 2.667 2.667v16c0 1.467-1.2 2.667-2.667 2.667h-21.333c-1.467 0-2.667-1.2-2.667-2.667v-16c0-1.467 1.2-2.667 2.667-2.667z"
      ></path>
      <path
        fill="none"
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke-miterlimit="4"
        stroke-width="2.6667"
        stroke={fill}
        d="M29.333 8l-13.333 9.333-13.333-9.333"
      ></path>
    </svg>
  );
};

export default IconMail;
