import React from "react";
import { Link } from "react-scroll";

const MenuOverlay = ({ links }) => {
  return (
    <ul className="flex gap-5 py-4 items-center justify-center">
      {links.map((link, index) => (
        <li key={index}>
          <Link to={link.path} smooth={true} offset={50} duration={500}>{link.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
