import React, { SVGProps } from "react";

function ClearIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      {...props}
    >
      <path
        fill="#AAA"
        d="M12.987 3.042c-2.73-2.723-7.21-2.723-9.94 0-2.73 2.724-2.73 7.192 0 9.916a6.983 6.983 0 0 0 9.87 0c2.73-2.724 2.8-7.192.07-9.916Zm-3.01 7.89-1.96-1.954-1.96 1.955-.98-.978L7.037 8l-1.96-1.955.98-.978 1.96 1.955 1.96-1.955.98.978L8.997 8l1.96 1.955-.98.978Z"
      />
    </svg>
  );
}

export default ClearIcon;
