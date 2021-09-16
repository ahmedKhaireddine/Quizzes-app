import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import QuizArea from "./pages/QuizArea";
const routes = [
  {
    component: QuizArea,
    path: "/"
  }
]
const Routes = () => {
  return (
    <Router>
      <Switch>
        {routes.map(({ component, path }, index) => {
          return <Route key={index} exact path={path} component={component}/>
        })}
      </Switch>
    </Router>
  )
}

export default Routes;
