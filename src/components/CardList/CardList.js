import React, {Component} from "react";
import "./CardList.css"
import Card from "../Card/Card";

class CardList extends Component {
    render() {
        const cats = this.props.cats;
        return (
            <>
                <div className="card-list tc pa4">
                    {
                        cats.map((cat, index) => {
                            return (
                                <Card
                                    name={cats[index].name}
                                    email={cats[index].email}
                                    username={cats[index].username}
                                    id={cats[index].id}
                                    key={index}/>
                            )
                        })
                    }
                </div>
            </>
        );
    }
}

export default CardList;
