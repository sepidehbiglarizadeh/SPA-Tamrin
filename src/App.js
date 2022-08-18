import { Route, Switch } from "react-router-dom";
import Layout from "./Layout/Layout";
import routes from "./routes";

const App = () => {
  return (
    <Layout>
      <Switch>
        {routes.map((route) => {
          return <Route key={Date.now()} {...route} />;
        })}
      </Switch>
    </Layout>
  );
};

export default App;
