export default function createRouter() {
  return createBrowserRouter([
    {
      path: "/",
      element: <Home />, // JSX - все еще здесь, но в функции, которая вызывается React
    },
  ]);
}
