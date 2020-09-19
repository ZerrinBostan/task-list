import React from 'react';

type IconProps = {
  width?: number;
  height?: number;
  fill: string;
};

const IconMap = (props: IconProps) => {
  const { fill, width = 16, height = 16 } = props;
  console.log('->>', props);
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 32 32"
    >
      <title>map</title>
      <path
        fill="none"
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke-miterlimit="4"
        stroke-width="2.6667"
        stroke={fill}
        d="M28 13.333c0 9.333-12 17.333-12 17.333s-12-8-12-17.333c0-3.183 1.264-6.235 3.515-8.485s5.303-3.515 8.485-3.515c3.183 0 6.235 1.264 8.485 3.515s3.515 5.303 3.515 8.485z"
      ></path>
      <path
        fill="none"
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke-miterlimit="4"
        stroke-width="2.6667"
        stroke={fill}
        d="M16 17.333c2.209 0 4-1.791 4-4s-1.791-4-4-4-4 1.791-4 4c0 2.209 1.791 4 4 4z"
      ></path>
    </svg>
  );
};

export default IconMap;
