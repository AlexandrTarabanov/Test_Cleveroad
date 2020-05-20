import React from 'react';
import './App.css';
import {BrowserRouter, Route} from "react-router-dom";
import Catalog from "./components/Catalog";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import {AuthProvider} from "./Auth";
import PrivateRoute from "./PrivateRoute";
import {EditProduct} from "./components/EditProduct/EditProduct";
import Add from "./components/Add";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <div className="App">
                    <PrivateRoute exact path="/" component={Catalog}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/login" component={SignUp}/>
                    <Route exact path="/add" component={Add}/>
                    <Route exact path="/edit" component={EditProduct}/>

                </div>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
