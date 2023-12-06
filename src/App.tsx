import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactPage from "./pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ContactPage />,
  },
  {
    path: "/second-page",
    element: <h1>Secodn Page</h1>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
