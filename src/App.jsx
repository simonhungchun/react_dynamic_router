import { lazy, createContext, useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { getAdminMenus } from "./mock";

import Error404 from "@/error/404";
import Layout from "./layout";

export const RoutesContext = createContext();
const modules = import.meta.glob("./pages/**/*.jsx");
const pages = Object.entries(modules).reduce((prev, [path, component]) => {
  prev[path.replace("./pages", "")] = component;
  return prev;
}, {});

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      // { path: "/one", Component: lazy(() => import("@/pages/one")) },
      // { path: "/two", Component: lazy(() => import("@/pages/two")) },
      // { path: "/three", Component: lazy(() => import("@/pages/three")) },
    ],
  },
  { path: "*", Component: Error404 },
]);

function App() {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getAdminMenus().then((adminMenu) => {
      setMenu(adminMenu);
      setLoading(false);
      router.routes[0].children = adminMenu.map(({ route, componentPath }) => {
        return {
          path: route,
          Component: lazy(pages[componentPath]),
        };
      });
    });
  }, []);

  if (loading) {
    return <h3>加载菜单中...</h3>;
  }

  return (
    <RoutesContext.Provider value={{ menu, setMenu }}>
      <RouterProvider router={router}></RouterProvider>
    </RoutesContext.Provider>
  );
}

export default App;
