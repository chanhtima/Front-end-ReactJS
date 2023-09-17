import React from "react";

function HorizontalMenu(itemMemu) {
  return (
    <ul className="menu menu-horizontal px-1">
          <li>
            <a href={itemMemu.url}>{itemMemu.name}</a>
          </li>
       
        </ul>
  );
}

export default HorizontalMenu;
