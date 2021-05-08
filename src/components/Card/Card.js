import React, {Component} from "react";
import "./Card.css"

class Card extends Component {
    render() {
        const {id, name, username, email} = this.props;
        return (
            <>
                <div className='card bg-light-yellow br3 pa4 ma4 grow dib bw2 shadow-5 tc pt5 pb5'>
                    <img src={`https://robohash.org/${id}?200x200&set=set4`} alt='cat'/>
                    <div className="card-details">
                        <h2 className="card-title mt4 mb3 f1">
                            {name}
                        </h2>
                        <h3 className="card-username mb3 f2 normal">
                            {username}
                        </h3>
                        <p className="card-email f3">{email}</p>
                    </div>
                </div>
            </>
        );
    }
}

export default Card;