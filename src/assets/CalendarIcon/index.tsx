import React, { SVGProps } from "react";

function CalendarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      fill="none"
      {...props}
    >
      <g clipPath="url(#a)">
        <path
          fill="#AAA"
          d="M8.2 9.6a.772.772 0 0 1-.57-.23.772.772 0 0 1-.23-.57c0-.227.077-.417.23-.57A.773.773 0 0 1 8.2 8c.227 0 .417.077.57.23.153.153.23.343.23.57a.773.773 0 0 1-.23.57.775.775 0 0 1-.57.23ZM5 9.6a.775.775 0 0 1-.57-.23.773.773 0 0 1-.23-.57c0-.227.077-.417.23-.57A.776.776 0 0 1 5 8c.227 0 .417.077.57.23.153.153.23.343.23.57a.773.773 0 0 1-.23.57.775.775 0 0 1-.57.23Zm6.4 0a.772.772 0 0 1-.57-.23.772.772 0 0 1-.23-.57c0-.227.077-.417.23-.57A.773.773 0 0 1 11.4 8c.227 0 .416.077.57.23.153.153.23.343.23.57a.772.772 0 0 1-.23.57.772.772 0 0 1-.57.23Zm-3.2 3.2a.772.772 0 0 1-.57-.23.772.772 0 0 1-.23-.57c0-.227.077-.416.23-.57a.772.772 0 0 1 .57-.23c.227 0 .417.077.57.23.153.154.23.343.23.57a.773.773 0 0 1-.23.57.775.775 0 0 1-.57.23Zm-3.2 0a.775.775 0 0 1-.57-.23.773.773 0 0 1-.23-.57c0-.227.077-.416.23-.57A.775.775 0 0 1 5 11.2c.227 0 .417.077.57.23.153.154.23.343.23.57a.773.773 0 0 1-.23.57.775.775 0 0 1-.57.23Zm6.4 0a.772.772 0 0 1-.57-.23.772.772 0 0 1-.23-.57c0-.227.077-.416.23-.57a.772.772 0 0 1 .57-.23c.227 0 .416.077.57.23.153.154.23.343.23.57a.772.772 0 0 1-.23.57.772.772 0 0 1-.57.23ZM2.6 16c-.44 0-.817-.156-1.13-.47A1.543 1.543 0 0 1 1 14.4V3.2c0-.44.157-.817.47-1.13.313-.313.69-.47 1.13-.47h.8V0H5v1.6h6.4V0H13v1.6h.8c.44 0 .817.157 1.13.47.313.313.47.69.47 1.13v11.2c0 .44-.157.817-.47 1.13-.313.314-.69.47-1.13.47H2.6Zm0-1.6h11.2v-8H2.6v8Z"
        />
      </g>
      <defs>
        <clipPath id="a">
          <path fill="#fff" d="M0 0h16v16H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default CalendarIcon;