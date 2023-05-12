import React from "react";
import Home from "./routes/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import SearchResults from "./routes/SearchResults";
import Beat from "./routes/Beat";
import Member from "./routes/Member";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout></RootLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      { path: ":userId", element: <Member></Member> },
      {
        path: "search",
        element: <SearchResults></SearchResults>,
      },
      { path: "beat/:beatId", element: <Beat></Beat> },
    ],
  },
]);

//   { path: "/", element: <Home></Home>, children: [] },
//   { path: "/Search", element: <SearchResults></SearchResults> },
// ]);
/* this works the way it shld but if search is a child of home, it'll only render home at /search */

function App() {
  return <RouterProvider router={router} />;
}

export default App;
