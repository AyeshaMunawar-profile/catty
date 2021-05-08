import React, {Component} from "react";
import "./Card.css"

class Card extends Component {
    render() {
        return (
            <div className="f1 tc">
                <h1>{this.props.robotName}</h1>
                <h4>These the the details related ot the card</h4>
            </div>
        );
    }
}
export default Card;