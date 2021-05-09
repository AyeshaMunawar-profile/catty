import React, {Component} from "react";
import "./Card.css"

class Card extends Component {
    render() {
        const {id, name, username, email} = this.props;
        return (
            <>
                <div className='card bg-light-yellow br3 pa4 ma4 grow dib bw2 shadow-5 tc pt5 pb5'>
                    <img src={`https://robohash.org/${id}?size=200x200&set=set4`} alt='cat'/>
                    <div className="card-details">
                        <h2 className="card-title mt5 mb4 f2 f-cartoon normal">
                            {name}
                        </h2>
                        <h3 className="card-username mb3 f3 b">
                            {username}
                        </h3>
                        <p className="card-email f3 ">{email}</p>
                    </div>
                </div>
            </>
        );
    }
}

export default Card;