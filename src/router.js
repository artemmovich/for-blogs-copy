import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  Routes

} from "react-router-dom";
import Home from "./pages/Home"
import React from "react";
import Blog from "./pages/Blog";
import WorksBig from "./pages/WorksBig/WorksBig";


export const router = createBrowserRouter(
  createRoutesFromElements(

    <Route >

      <Route path="/Home" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/Works" element={<WorksBig />} />
    </Route>
  )
);
