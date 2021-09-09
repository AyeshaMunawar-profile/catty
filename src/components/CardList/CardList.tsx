import React, {Component} from "react";
import "./CardList.css"
import Card from "../Card/Card";

type cat = {
    name: string|undefined,
    email: string|undefined,
    id: number|undefined,
    username: string | undefined,
    key: number|undefined
}
type cardListProps = {
    cats: cat[] | undefined,
    isPending: boolean,
    error: string | undefined,
  
}
class CardList extends Component <cardListProps>{
    render() {
        // in case if you need error handling use throw new Error("message")
        const {cats, isPending, error} = this.props;
        return (
            <>
                <div className="card-list tc pa2 pt0 mt5-ls mb5-ls mt3-m mb3-m mt3 mb3">
                    {cats?.length && !isPending && !error ?
                        cats.map((cat, index) => {
                            return (
                                <Card
                                    name={cats[index]?.name}
                                    email={cats[index]?.email}
                                    username={cats[index]?.username}
                                    id={cats[index]?.id}
                                    key={index}/>
                            )
                        }) : isPending ? <h1 className="white f1 mt6 grow">Loading ...</h1> :
                            error ?
                                <h1 className="white f1 mt6 grow">Ooops! Something went wrong <br/> Try refreshing the
                                    page</h1> :
                                <h1 className="white f1 mt6 grow">No Cats Found !</h1>
                    }
                </div>
            </>
        );
    }
}

export default CardList;
