import DevTools from 'mobx-react-devtools'
import * as React from 'react'
import * as Loadable from 'react-loadable'
import { Route, Switch } from 'react-router-dom'
import Loading from 'components/Loading'

import 'styles/main.css'

const Home = Loadable({
  loader: () => import('containers/CounterContainer'),
  loading: Loading,
})

const App: React.SFC<{}> = () => {
  return (
    <div>
      <Switch>
        <Route exact={true} path="/" component={Home} />
      </Switch>
      {process.env.NODE_ENV === 'development' && <DevTools />}
    </div>
  )
}

export default App
