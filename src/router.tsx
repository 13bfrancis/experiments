import { type ActionFunctionArgs, createBrowserRouter } from "react-router-dom";
import { Home } from "./routes/Home";

export const action = async ({ request }: ActionFunctionArgs) => {
  const formData = Object.fromEntries(await request.formData());

  console.log("Home page", formData);
  return { errors: ["hi"] };
};

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    action,
  },
]);
