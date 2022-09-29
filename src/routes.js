import { Navigate } from "react-router-dom";
import Blog from "./components/Blog/Blog";
import AboutUsPage from "./components/pages/AboutusPage";
import BlogsPage from "./components/pages/BlogsPage";
import HomePage from "./components/pages/HomePage";
import NotFound from "./components/pages/NotFound";
import PostPage from "./components/pages/PostPage";
import ProfilePage from "./components/pages/ProfilePage";

const routes = [
  { path: "/blogs/:id", element: <Blog/> },
  { path: "/blogs", element: <BlogsPage/> },
  { path: "/about-us", element: <AboutUsPage/> },
  { path: "/profile/*", element: <ProfilePage/> },
  { path: "/post/:id([0-9]+)?", element: <PostPage/>},
  { path: "/", element: <HomePage/> },
  { path: "*", element: <NotFound/> },
];

export default routes;
