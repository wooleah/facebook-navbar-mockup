import React from "react";

import NavItem from "./NavItem";
import DropdownMenu from "../Dropdown/DropdownMenu";

import { ReactComponent as PlusIcon } from "../../assets/icons/plus.svg";
import { ReactComponent as BellIcon } from "../../assets/icons/bell.svg";
import { ReactComponent as MessengerIcon } from "../../assets/icons/messenger.svg";
import { ReactComponent as CaretIcon } from "../../assets/icons/caret.svg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <NavItem icon={<PlusIcon />} />
        <NavItem icon={<BellIcon />} />
        <NavItem icon={<MessengerIcon />} />
        <NavItem icon={<CaretIcon />}>
          <DropdownMenu></DropdownMenu>
        </NavItem>
      </ul>
    </nav>
  );
}
