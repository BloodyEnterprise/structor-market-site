'use strict';

import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { createHistory } from 'history';
import MainPage from './MainPage.js';
import LearnMorePage from './LearnMorePage.js';
import ReadmePage from './ReadmePage.js';

export default function() {
    const history = createHistory();
    return (
        <Router history={ history }>
            <Route path="/" component="div">
                <IndexRoute component={ MainPage } />
                <Route path="/home" component={ MainPage } />
                <Route path="/learn-more" component={ LearnMorePage } />
                <Route path="/readme" component={ ReadmePage } />
            </Route>
        </Router>
        );
}