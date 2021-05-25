import React, { useEffect, useState } from "react";
import './App.css';
import CardList from "../../components/CardList/CardList";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import Scroll from "../../components/common/Scroll/Scroll";
import ErrorBoundary from "../../components/common/Error Boundary/ErrorBoundary";

const App = () => {

    const [cats, setCats] = useState([]);
    const [searchField, setSearchField] = useState("");

    // use effect adds the ability to perform sideeffects from a function component . It has the same effect as componentDidMount componentWillMount , componentDidUpdate

    // called when ever the page renders 

    // in the second argument tell the useeffect when to run it (what changes to make it run) bacause otherwise when App component initializes useEffect runs state changes (cats) because of which App rerenders then again runs useEffect again state changes and the cycle continues sending empty array makes it to run only once (asically works like componentDidMount) 

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(cats => {
                setCats(cats);
            });
    }, []);

    const onSearchChange = (event) => {
        setSearchField(event.target.value);
    }

    const filteredCats = cats.filter(cat => {
        return cat.name.toLowerCase().includes(searchField.toLowerCase())
    });

    return (
        <>
            <div className="app">
                <Header headingText="Catty" />
                <SearchBar searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundary>
                        <CardList cats={filteredCats} />
                    </ErrorBoundary>
                </Scroll>
            </div>
        </>
    );

}

export default App;