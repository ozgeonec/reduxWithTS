import React from 'react';
import {store} from '../state';
import {Provider} from "react-redux";
import RepositoriesList from "./RepositoriesList";

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                hi
                <RepositoriesList/>
            </div>
        </Provider>
    );
}

export default App;
