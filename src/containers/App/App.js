import React, {Component} from "react";
import './App.css';
import CardList from "../../components/CardList/CardList";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import Scroll from "../../components/common/Scroll/Scroll";
import ErrorBoundary from "../../components/common/Error Boundary/ErrorBoundary";

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cats: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => {
                this.setState({cats: users})
            });
    }

    onSearchChange = (event) => {
        this.setState({searchField: event.target.value});
    }

    render() {
        const {cats, searchField} = this.state;
        const filteredCats = cats.filter(cat => {
            return cat.name.toLowerCase().includes(searchField.toLowerCase())
        });
        return (
            <>
                <div className="app">
                    <Header headingText="Catty"/>
                    <SearchBar searchChange={this.onSearchChange}/>
                    <Scroll>
                        <ErrorBoundary>
                            <CardList cats={filteredCats}/>
                        </ErrorBoundary>
                    </Scroll>
                </div>
            </>
        );
    }

}

export default App;