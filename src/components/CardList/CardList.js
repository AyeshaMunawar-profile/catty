import React, {Component} from "react";
import {Cats} from "../../common/catslist"
import "./CardList.css"
import Card from "../Card/Card";

class CardList extends Component {
    render() {
        return (
            <>
                <div className="card-list tc">
                    <Card name={Cats[0].name} email={Cats[0].email} username={Cats[0].username} id={Cats[0].id}/>
                    <Card name={Cats[1].name} email={Cats[1].email} username={Cats[1].username} id={Cats[1].id}/>
                    <Card name={Cats[2].name} email={Cats[2].email} username={Cats[2].username} id={Cats[2].id}/>
                </div>
            </>
        );
    }
}

export default CardList;
