import React from 'react';

type IconProps = {
  width: number;
  height: number;
  fill: string;
};

const IconLink = (props: IconProps) => {
  const { fill } = props;
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      {...props}
    >
      <title>link</title>
      <path
        fill="none"
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke-miterlimit="4"
        stroke-width="2.6667"
        stroke={fill}
        d="M13.333 17.333c0.573 0.765 1.303 1.399 2.142 1.857s1.767 0.731 2.72 0.799c0.953 0.068 1.911-0.069 2.806-0.403s1.709-0.857 2.385-1.533l4-4c1.214-1.257 1.886-2.941 1.871-4.689s-0.716-3.42-1.952-4.656c-1.236-1.236-2.908-1.937-4.656-1.952s-3.432 0.657-4.689 1.871l-2.293 2.28"
      ></path>
      <path
        fill="none"
        stroke-linejoin="round"
        stroke-linecap="round"
        stroke-miterlimit="4"
        stroke-width="2.6667"
        stroke={fill}
        d="M18.667 14.667c-0.573-0.765-1.303-1.399-2.142-1.857s-1.767-0.731-2.72-0.799c-0.954-0.068-1.911 0.069-2.806 0.403s-1.709 0.857-2.385 1.533l-4 4c-1.214 1.257-1.886 2.941-1.871 4.689s0.716 3.42 1.952 4.656c1.236 1.236 2.908 1.937 4.656 1.952s3.432-0.657 4.689-1.871l2.28-2.28"
      ></path>
    </svg>
  );
};

export default IconLink;
