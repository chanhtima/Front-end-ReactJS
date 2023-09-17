import React from "react";

function HambergerMenu({ items }) {
  return (
    <div className="drawer-end  ">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block w-5 h-5 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </label>
      </div>
      <div className="drawer-side z-[99]">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 min-h-full bg-white text-base-content">
          {items.map((item) => (
            <li key={item.id}>
              <a href={item.url}>{item.name}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HambergerMenu;
