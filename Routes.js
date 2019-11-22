import React from 'react';
import { NativeRouter, Route } from 'react-router-native';

import AppComponent from './components/App';
import CommitsComponent from './components/Commits';

const Routes = () => {
    return (
        <NativeRouter>
            <Route exact path="/" components={AppComponent} />
            <Route path="/commits" components={CommitsComponents} />
        </NativeRouter>
    )
}