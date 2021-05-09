import React, {Component} from "react";
import "./Card.css"

class Card extends Component {
    render() {
        const {id, name, username, email} = this.props;
        return (
            <>
                <div className='card bg-light-yellow br3 pa3 ma3 grow dib bw2 shadow-5 tc pt5 pb5'>
                    <img src={`https://robohash.org/${id}?size=200x200&set=set4`} alt='cat'/>
                    <div className="card-details">
                        <h2 className="card-title mt4 mb4 f2 f-cartoon normal">
                            {name}
                        </h2>
                        <h3 className="card-username mb2 f4 b">
                            {"@" + username}
                        </h3>
                        <p className="card-email f4">{email}</p>
                    </div>
                </div>
            </>
        );
    }
}

export default Card;