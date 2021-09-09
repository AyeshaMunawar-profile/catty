import React, {Component} from "react";
import './SearchBar.css';
type searchBarProps = {
    searchChange: any
}
class SearchBar extends Component <searchBarProps>{
    render() {
        const searchChange = this.props.searchChange;
        return (
            <>
                <div className="pa3 tc mb6-ls mb4-m mb5">
                    <input type="search"
                           placeholder="find a cat by name ..."
                           className="search-bar pa3 ba b--yellow bg-white-90 w-50-l w-60-m w-90"
                           onChange={searchChange}/>
                </div>
            </>
        )
    }
}

export default SearchBar;