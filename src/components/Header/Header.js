import React, {Component} from "react";
import './Header.css'

class Header extends Component {
    render() {
        return (
            <>
                <div className="header tc pt3-l pb3-l pt2-m pb2-m pt2 pb2 ">
                    <h1 className='f-headline lh-title f-cartoon white'>{this.props.headingText}</h1>
                </div>
            </>
        );
    }
}

export default Header;