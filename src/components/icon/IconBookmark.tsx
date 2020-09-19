import React from 'react';

type IconProps = {
  width : number;
  height: number,
  fill: string
};

const IconBookmark = (props: IconProps) => (
  <svg
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    {...props}
  >
    <title>bookmark</title>
    <path d="M16 4h3v4.994c0 1.119 0.895 2.006 1.998 2.006h4.002v17.007c0 0.548-0.448 0.993-1 0.993h-15c-0.545 0-1-0.446-1-0.995v-23.009c0-0.54 0.446-0.995 0.996-0.995h1.004v11l3-3 3 3v-11zM19.5 3h-10.497c-1.106 0-2.003 0.898-2.003 2.007v22.985c0 1.109 0.891 2.007 1.997 2.007h15.005c1.103 0 1.997-0.898 1.997-1.991v-18.009l-6-7h-0.5zM20 4.5l4.7 5.5h-3.703c-0.546 0-0.997-0.452-0.997-1.009v-4.491zM11 4h4v8.6l-2-2-2 2v-8.6z"></path>
  </svg>
);

export default IconBookmark;
