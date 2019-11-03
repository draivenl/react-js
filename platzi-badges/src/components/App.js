import React from 'react';
import {BrowserRouter, Route, Switch} from "react-router-dom"
import Badges from "../pages/Badges";
import BadgeNew from "../pages/BadgeNew";

import Layout from "./Layout"

function App(props) {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/badges" component={Badges} />
                    <Route exact path="/badges/new" component={BadgeNew} />
                </Switch>
            </Layout>
        </BrowserRouter>
    );
}

export default App;