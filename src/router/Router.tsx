import { memo,VFC } from "react";
import { Switch, Route } from 'react-router-dom'

import { Login } from "../components/pages/Logion";
import { Page404 } from "../components/pages/Page404";
import { homeRoutes } from "./HomeRoutes";


export const Router: VFC = memo(() => {
  return (
    <Switch>
      <Route exact path="/">
        <Login />
      </Route>
      <Route 
        path="/home"
        render={({match: {url}}) => (
          <Switch>
            {homeRoutes.map((route) => (
              <Route
                key={route.path} // mapメソッドで展開する際はkey情報が必要
                exact={route.exact}
                path={`${url}${route.path}`} // /home/以下のpathと結合してフルパスにする必要がある
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      >
      </Route>

      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  )
})