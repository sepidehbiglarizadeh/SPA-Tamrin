import { Route, Switch } from "react-router-dom";
import Layout from "./Layout/Layout";
import routes from "./routes";
import "./App.css"

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
