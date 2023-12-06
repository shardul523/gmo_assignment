import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactPage from "./pages/ContactPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ContactPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
