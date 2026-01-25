import { useGetMe } from "@/modules/user";
import { NavItem } from "./NavItem";

export const Navigation = () => {
  const { data: user } = useGetMe();

  return (
    <nav>
      <ul className="flex gap-2">
        {user ? (
          <>
            <NavItem to="/profile" label="Profile" />
            <NavItem to="/logout" label="Logout" />
          </>
        ) : (
          <>
            <NavItem to="/login" label="Login" />
            <NavItem to="/register" label="Register" />
          </>
        )}
      </ul>
    </nav>
  );
};
