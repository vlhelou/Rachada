import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './layout/header'
import Home from './paginas/home'
import Login from './login/login'
import Registra from './login/registra'

const rotas: React.FC = (props) => (
    <div>
        <BrowserRouter>
            <Header />
            <div className="container">
                <Switch>
                    <Route path="/" exact={true} component={Home} />
                    <Route path="/registra" exact={true} component={Registra} />
                    <Route path="/login" exact={true} component={Login} />
                </Switch>
            </div>
        </BrowserRouter>
    </div>
)

export default rotas