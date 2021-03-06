import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import './App.css';
import CardList from "../../components/CardList/CardList";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import Scroll from "../../components/common/Scroll/Scroll";
import ErrorBoundary from "../../components/common/Error Boundary/ErrorBoundary";
import {requestCats, setSearchField} from "../../redux/actions";
import { AppDispatch, RootState } from '../../redux/store';

const mapDispatchToProps = (dispatch : AppDispatch) => {
    return {
        onSearchChange: (event: any) => {
            dispatch(setSearchField(event.target.value))
        },
        onRequestCats: () => {
            dispatch<any>(requestCats())
        }
    }
}
const mapStateToProps = (state : RootState) => {
    console.log("State received in the component is ", state);
    return {
        searchField: state.searchCatsReducer.searchField,
        cats: state.requestCatsReducer.cats,
        isPending: state.requestCatsReducer.isPending,
        error: state.requestCatsReducer.error
    }
}
const App = (props: any) => {
    console.log("Props are:", props);
    const {cats, searchField, onSearchChange, isPending, error} = props;
    // use effect adds the ability to perform sideeffects from a function component . It has the same effect as componentDidMount componentWillMount , componentDidUpdate

    // called when ever the page renders 

    // in the second argument tell the useeffect when to run it (what changes to make it run) bacause otherwise when App component initializes useEffect runs state changes (cats) because of which App rerenders then again runs useEffect again state changes and the cycle continues sending empty array makes it to run only once (asically works like componentDidMount) 

    useEffect(() => {
        props.onRequestCats();
    }, []);

    const filteredCats = cats.filter((cat: any) => {
        return cat.name.toLowerCase().includes(searchField.toLowerCase())
    });

    return (
        <>
            <div className="app">
                <Header headingText="Catty"/>
                <SearchBar searchChange={onSearchChange}/>
                <Scroll>
                    <ErrorBoundary>
                        <CardList cats={filteredCats} isPending={isPending} error={error}/>
                    </ErrorBoundary>
                </Scroll>
            </div>
        </>
    );

}

export default connect(mapStateToProps, mapDispatchToProps)(App);