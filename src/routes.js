import Blog from "./components/Blog/Blog";
import AboutUsPage from "./components/pages/AboutusPage";
import BlogsPage from "./components/pages/BlogsPage";
import HomePage from "./components/pages/HomePage";
import NotFound from "./components/pages/NotFound";
import ProfilePage from "./components/pages/ProfilePage";

const routes = [
  { path: "/blogs/:id", element: <Blog/> },
  { path: "/blogs", element: <BlogsPage /> },
  { path: "/about-us", element: <AboutUsPage /> },
  { path: "/profile", element: <ProfilePage /> },
  { path: "/", element: <HomePage />, exact: true },
  { path: "*", element: <NotFound /> },
];

export default routes;
