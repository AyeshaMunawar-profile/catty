import React, {Component} from "react";
import './App.css';
import CardList from "./components/CardList/CardList";
import Header from "./components/Header/Header";
import {cats} from "./common/js/catslist"
import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cats: cats,
            searchField: ''
        }

    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    render() {
        const filteredCats = this.state.cats.filter(cat => {
            return cat.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        });
        return (
            <>
                <div className="app">
                <Header/>
                <SearchBar searchChange={this.onSearchChange}/>
                <CardList cats={filteredCats}/>
                </div>
            </>
        );
    }
}

export default App;