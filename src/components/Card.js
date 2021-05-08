import React, {Component} from "react";
import "./Card.css"

class Card extends Component {
    render() {
        return (
            <>
                <div>
                    <img src='https://robohash.org/1491?set=set4' alt='profile picture of robot'/>
                    <div>git
                        <h2>
                            Mr Mittens
                        </h2>
                        <p>AyeshaMunwar@gmail.com</p>
                    </div>
                </div>
            </>
        );
    }
}

export default Card;