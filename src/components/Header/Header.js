import React, {Component} from "react";
import SearchBar from "../SearchBar/SearchBar";
import './Header.css'

class Header extends Component {
    render() {
        return (
            <>
                <div className="header tc">
                    <h1 className='f-headline lh-solid'>Heading 1</h1>
                    <SearchBar />
                </div>
            </>
        );
    }
}

export default Header;