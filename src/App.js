import { Route, Routes } from "react-router-dom";
import AboutUsPage from "./components/pages/AboutusPage";
import HomePage from "./components/pages/HomePage";
import ProfilePage from "./components/pages/ProfilePage";
import Layout from "./Layout/Layout";
import routes from "./routes";

const App = () => {
  return (
    <Layout>
      <Routes>
        {routes.map((route) => {
          return <Route key={Date.now()} {...route} />;
        })}
      </Routes>
    </Layout>
  );
};

export default App;
