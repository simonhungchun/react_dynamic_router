import { RoutesContext } from "@/App";
import { Suspense, useContext } from "react";
import { Outlet, Link } from "react-router-dom";

function Layout() {
  const { menu } = useContext(RoutesContext);

  return (
    <div>
      <h2>layout!</h2>
      <ul>
        {menu.map((item) => (
          <li key={item.route}>
            <Link to={item.route}>{item.name}</Link>
          </li>
        ))}
      </ul>
      <Suspense fallback="拼命加载...">
        <Outlet />
      </Suspense>
    </div>
  );
}

export default Layout;
