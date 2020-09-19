import React from 'react';

type IconProps = {
  width: number;
  height: number;
  fill: string;
};

const IconStar = (props: IconProps) => {
  const { fill } = props;
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      width="16"
      height="16"
    >
      <title>star</title>
      <path
        fill="none"
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke-miterlimit="4"
        stroke-width="2.6667"
        stroke={fill}
        d="M16 2.667l4.12 8.347 9.213 1.347-6.667 6.493 1.573 9.173-8.24-4.333-8.24 4.333 1.573-9.173-6.667-6.493 9.213-1.347 4.12-8.347z"
      ></path>
    </svg>
  );
};

export default IconStar;
