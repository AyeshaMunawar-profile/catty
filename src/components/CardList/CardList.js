import React, {Component} from "react";
import "./CardList.css"
import Card from "../Card/Card";

class CardList extends Component {
    render() {
        // in case if you need error handling use throw new Error("message")
        const cats = this.props.cats;
        return (
            <>
                <div className="card-list tc pa2 pt0 mt5 mb5">
                    {cats.length ?
                        cats.map((cat, index) => {
                            return (
                                <Card
                                    name={cats[index].name}
                                    email={cats[index].email}
                                    username={cats[index].username}
                                    id={cats[index].id}
                                    key={index}/>
                            )
                        }) : <h1 className="white f1 mt6 grow">Loading ...</h1>
                    }
                </div>
            </>
        );
    }
}

export default CardList;
