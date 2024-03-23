import React from "react";
import Home from "./routes/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./routes/RootLayout";
import Search from "./routes/Search";
import Beat from "./routes/Beat";
import Member from "./routes/Member";
import SignUp from "./routes/SignUp";
import Login from "./routes/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import NotFound from "./routes/NotFound";
import RootLayoutStudio from "./routes/RootLayoutStudio";
import Studio from "./routes/Studio";
import Uploads from "./routes/Uploads";
import Beats from "./routes/Beats";

const ROLES = {
  Listener: 2000,
  Producer: 1998,
};

//NB: Children only applies to rootlayout where outlet is used
const router = createBrowserRouter([
  {
    element: <RootLayout></RootLayout>,
    errorElement: <NotFound></NotFound>,

    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      { path: "beats", element: <Beats></Beats> },
      { path: ":userId", element: <Member></Member> },

      {
        path: "search",
        element: <Search></Search>,
      },
    ],
  },
  {
    element: <ProtectedRoute allowedRoles={[ROLES.Listener]}></ProtectedRoute>,
    children: [{ path: "beat/:beatId", element: <Beat></Beat> }],
  },
  { path: "signup", element: <SignUp></SignUp> },
  { path: "signin", element: <Login></Login> },
  {
    element: <RootLayoutStudio></RootLayoutStudio>,
    children: [
      { path: "/studio", element: <Studio></Studio> },
      { path: "studio/uploads", element: <Uploads></Uploads> },
    ],
  },
  // {
  //   element: <RootLayoutStudio></RootLayoutStudio>,
  //   children: [
  //     {
  //       element: (
  //         <ProtectedRoute allowedRoles={[ROLES.Producer]}></ProtectedRoute>
  //       ),
  //       children: [
  //         { path: "/studio", element: <Studio></Studio> },
  //         { path: "studio/uploads", element: <Uploads></Uploads> },
  //       ],
  //     },
  //   ],
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
