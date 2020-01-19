import React from 'react';
import './App.scss';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import AboutPage from "../AboutPage/AboutPage";
import HomePage from "../HomePage/HomePage";
import TopBar from "../TopBar/TopBar";
import Footer from "../Footer/Footer";

export default class App extends React.Component<any, any> {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <TopBar/>
                    <div className={"Page"}>
                        <Switch>
                            <Route exact path={"/about"}><AboutPage/></Route>
                            <Route><HomePage/></Route>
                        </Switch>
                    </div>
                    <Footer/>
                </div>
            </BrowserRouter>
        );
    }
}
