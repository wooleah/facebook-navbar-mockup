import React, { useState } from "react";

import "./NavItem.scss";

export default function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {/* Show dropdown when open state is set to true */}
      {open && props.children}
    </li>
  );
}
