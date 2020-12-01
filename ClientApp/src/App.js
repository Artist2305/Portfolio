import React from 'react';
import { useLocation } from "react-router-dom";
import AppContainer from "./AppContainer";


const App = () => {
    const location = useLocation();
    return (
        <AppContainer
            location={location}
        />
    )
}
export default App;