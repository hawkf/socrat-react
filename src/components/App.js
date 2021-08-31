import { BrowserRouter, Route, Switch } from "react-router-dom";
//import "../css/App.css";
import { AppRoute } from "../const";
import { MainPage } from "./main-page";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.ROOT}>
          <MainPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
