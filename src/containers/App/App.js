import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import './App.css';
import CardList from "../../components/CardList/CardList";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import Scroll from "../../components/common/Scroll/Scroll";
import ErrorBoundary from "../../components/common/Error Boundary/ErrorBoundary";
import { setSearchField } from "../../redux/actions";

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => {
            dispatch(setSearchField(event.target.value))
        }
    }
}
const mapStateToProps = (state) => {
    return {
        searchField: state.searchCatsReducer.searchField
    }
}
const App = (props) => {

    const [cats, setCats] = useState([]);
    const { searchField, onSearchChange } = props;
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

export default connect(mapStateToProps, mapDispatchToProps)(App);