import React, {Component} from "react";
import './Header.css'

class Header extends Component {
    render() {
        return (
            <>
                <div className="header tc pt6 pb6">
                    <h1 className='f-headline lh-solid f-cartoon white'>CATTY</h1>
                </div>
            </>
        );
    }
}

export default Header;