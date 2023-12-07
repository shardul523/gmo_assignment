import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import SecondPage from "./pages/SecondPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ContactPage />,
  },
  {
    path: "/second-page",
    element: <SecondPage/>
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
