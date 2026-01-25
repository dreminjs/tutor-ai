import { Link } from "react-router";
import { Navigation } from "./Navigation";

export const Header = () => {
  return (
    <header className="flex justify-between mb-4">
      <Link to="/">Tutor AI</Link>
      <Navigation />
    </header>
  );
};
