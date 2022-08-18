import Blog from "./components/Blog/Blog";
import AboutUsPage from "./components/pages/AboutusPage";
import BlogsPage from "./components/pages/BlogsPage";
import HomePage from "./components/pages/HomePage";
import NotFound from "./components/pages/NotFound";
import PostPage from "./components/pages/PostPage";
import ProfilePage from "./components/pages/ProfilePage";

const routes = [
  { path: "/blogs/:id", component: Blog },
  { path: "/post/:id?", component: PostPage},
  { path: "/blogs", component: BlogsPage },
  { path: "/about-us", component: AboutUsPage },
  { path: "/profile", component: ProfilePage },
  { path: "/", component: HomePage, exact: true },
  { path: "*", component: NotFound },
];

export default routes;
