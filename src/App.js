import React, {Component} from "react";
import './App.css';
import CardList from "./components/CardList/CardList";
import Header from "./components/Header/Header";
import {cats} from "./common/catslist"

class App extends Component {
    render() {
        return (
            <>
                <Header/>
                <CardList cats={cats}/>
            </>
        );
    }
}

export default App;