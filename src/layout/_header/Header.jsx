import React from "react";
import HorizontalMenu from "../../components/menu/HorizontalMenu";
import { DataMenu } from "../../data/DataMenu";
import ImguserM from "../../assets/img/conference.png";

function Header() {
  const dataLi = DataMenu.map((item) => {
    return <HorizontalMenu key={item.id} name={item.name} url={item.url} />;
  });
  return (
    <div className="la-header">
      <div className="navbar">
        <div className="navbar-start">
          <a className=" la-header-logo" href="/">
            <h1>

            User Management
            </h1>
          </a>
        </div>
        <div className="navbar-end">
          <div className="w-10 rounded-full">
            <a href="/">
            <img src={ImguserM} alt="User" className="la-header-user" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
