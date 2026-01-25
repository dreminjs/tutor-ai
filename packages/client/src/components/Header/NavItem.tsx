import type { FC } from "react";
import { Link } from "react-router";

interface IProps {
  to: string;
  label: string;
}

export const NavItem: FC<IProps> = ({ to, label }) => {
  return (
    <li className="">
      <Link to={to}>{label}</Link>
    </li>
  );
};
