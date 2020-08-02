import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import PrivateRoute from './privateRoute'

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={() => <h1>Hello World!</h1>} />
            <PrivateRoute exact path="/index" component={() => <h1>Index Page</h1>} />
            <PrivateRoute exact path="/user" component={() => <h1>User Page</h1>} />
            <PrivateRoute exact path="/users" component={() => <h1>All Users Page</h1>} />
            <Route component={() => <h1>Página não encontrada! <a href="/">Voltar a página inicial</a></h1>} />
        </Switch>
    </BrowserRouter>
)

export default Routes;