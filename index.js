import React from 'react';
import {render} from 'react-dom';
import App from './components/App';

const rootElement = document.getElementById('root');

const renderApp = Component => (
    render(<Component />, rootElement)
);

renderApp(App);