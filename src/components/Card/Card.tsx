import { prototype } from "events";
import React, {Component} from "react";
import "./Card.css"

type cardPropsType = {
    name: string|undefined,
    email: string|undefined,
    id: number|undefined,
    username: string | undefined,
    key: number|undefined
}
class Card extends Component<cardPropsType> {
    render() {
        const {id, name, username, email} = this.props
        return (
            <>
                <div
                    className='card bg-light-yellow br3 pa3-l pa3-m p1 ma3 grow dib bw2 shadow-5 tc pt5-l pb5-l pt5-m pb5-m pt4 pb4'>
                    <img src={`https://robohash.org/${id}?size=200x200&set=set4`} alt='cat'/>
                    <div className="card-details">
                        <h2 className="card-title mt3 mb3 f2 f-cartoon normal">
                            {name}
                        </h2>
                        <h3 className="card-username mb2 f4 b">
                            {"@" + username}
                        </h3>
                        <p className="card-email f5">{email}</p>
                    </div>
                </div>
            </>
        );
    }
}

export default Card;