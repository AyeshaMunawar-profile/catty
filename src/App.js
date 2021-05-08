import React, {Component} from "react";
import './App.css';
import CardList from "./components/CardList/CardList";
import Header from "./components/Header/Header";
import {cats} from "./common/catslist"
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
        this.state.searchField = event.target.value;
        const filteredCats= this.state.cats.filter(cat=>{
            return cat.name.toLowerCase().includes(this.state.searchField.toLowerCase())
        });
        console.log(event.target.value, filteredCats);
    }

    render() {
        return (
            <>
                <Header/>
                <SearchBar searchChange={this.onSearchChange}/>
                <CardList cats={this.state.cats}/>
            </>
        );
    }
}

export default App;