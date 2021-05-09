import React, {Component} from "react";
import './Header.css'

class Header extends Component {
    render() {
        return (
            <>
                <div className="header tc pt3 pb3">
                    <h1 className='f-headline lh-title f-cartoon white'>Catty</h1>
                </div>
            </>
        );
    }
}

export default Header;