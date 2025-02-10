import React from 'react';

const Child = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={props.className}
    >
      {/* SVG path data for the Child icon */}
      <path d="M12 2a5 5 0 100 10 5 5 0 000-10zm0 8a3 3 0 110-6 3 3 0 010 6zm-7 9a1 1 0 011-1h2v-2a1 1 0 112 0v2h6v-2a1 1 0 112 0v2h2a1 1 0 011 1v3a1 1 0 01-1 1H6a1 1 0 01-1-1v-3z" />
    </svg>
  );
};

export default Child;
