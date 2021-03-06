import React from "react";
export default function GridIcon(props) {
  const strokeColor = props.strokeColor || "#0e0e0e";
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="17"
      viewBox="0 0 32 17"
      onClick={props.onClick}
    >
      <g
        id="Group_283"
        data-name="Group 283"
        transform="translate(-5581 -1487)"
      >
        <g
          id="Path_123"
          data-name="Path 123"
          transform="translate(5581 1487)"
          fill="none"
        >
          <path d="M0,0H32V17H0Z" stroke="none" />
          <path
            d="M 1 1 L 1 16 L 31 16 L 31 1 L 1 1 M 0 0 L 32 0 L 32 17 L 0 17 L 0 0 Z"
            stroke="none"
            fill={strokeColor}
            opacity={props.strokeColor ? 1 : 0.15}
          />
        </g>
        <g id="Group_282" data-name="Group 282" transform="translate(0 1)">
          <rect
            id="Rectangle_166"
            data-name="Rectangle 166"
            width="7"
            height="10"
            transform="translate(5585 1489)"
            fill={strokeColor}
            opacity={props.strokeColor ? 1 : 0.15}
          />
          <rect
            id="Rectangle_167"
            data-name="Rectangle 167"
            width="7"
            height="10"
            transform="translate(5594 1489)"
            fill={strokeColor}
            opacity={props.strokeColor ? 1 : 0.15}
          />
          <rect
            id="Rectangle_168"
            data-name="Rectangle 168"
            width="7"
            height="10"
            transform="translate(5603 1489)"
            fill={strokeColor}
            opacity={props.strokeColor ? 1 : 0.15}
          />
        </g>
      </g>
    </svg>
  );
}
