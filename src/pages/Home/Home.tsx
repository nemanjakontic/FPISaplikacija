import React from "react";
import ListClan from "../../components/Clan/ListClan/ListClan";


const Home = (props: any) => {
    return (
        <div className="container">
            <div className="row">
                    <ListClan clanovi={props.clanovi}/>
            </div>
        </div>
    );
}

export default Home;
