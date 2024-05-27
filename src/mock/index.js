export const getAdminMenus = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { name: "页面1", route: "/one", componentPath: "/one.jsx" },
        { name: "页面2", route: "/two", componentPath: "/two.jsx" },
        { name: "页面3", route: "/three", componentPath: "/three.jsx" },
      ]);
    }, 5000);
  });
};
export const getUserMenus = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ name: "页面1", route: "/one", componentPath: "/one.jsx" }]);
    }, 5000);
  });
};
