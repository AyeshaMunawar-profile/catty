import React from "react";
import './Scroll.css';

const Scroll = (props) => {
    return (
        <div className="scrollable ma5" style={{
            overflowY: 'scroll',
            border: '10px solid #fbf1a9',
            paddingTop: '5rem',
            paddingBottom: '5rem',
            height: '50rem',
            borderRadius: '20px'
        }}>
            {props.children}
        </div>
    );
}

export default Scroll;