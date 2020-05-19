import React from "react";

import ListUplate from "./ListUplate/ListUplate";
import {Uplatnica} from "../../modeli/Uplatnica";

import './Uplate.css';
import {Link} from "react-router-dom";

const Uplate = (props: any) => {
    // const UPLATNICE = [
    //     new Uplatnica(
    //         '1',
    //         '22-05-2019',
    //         1000,
    //         new Clan(
    //             '1',
    //             'Nemanja',
    //             'Kontic',
    //             '24-06-1997',
    //             'https://pbs.twimg.com/media/Cjx5kpZUoAIqfAK.jpg'
    //         ),
    //     ),
    //     new Uplatnica('2', '23-06-2018', 900, new Clan('1', 'Nemanja', 'Kontic', '24-06-1997', 'https://pbs.twimg.com/media/Cjx5kpZUoAIqfAK.jpg')),
    //     new Uplatnica('3', '24-07-2017', 600, new Clan('2', 'Sanja', 'Lukic', '02-03-1997', 'https://pbs.twimg.com/media/Cjx5kpZUoAIqfAK.jpg')),
    //     new Uplatnica('4', '25-08-2016', 300, new Clan('2', 'Sanja', 'Lukic', '02-03-1997', 'https://pbs.twimg.com/media/Cjx5kpZUoAIqfAK.jpg')),
    //     new Uplatnica('5', '26-09-2015', 1200, new Clan('3', 'Sofija', 'Milosevic', '30-12-1995', 'https://pbs.twimg.com/media/Cjx5kpZUoAIqfAK.jpg'))
    // ];

    // const clanID = useParams().clanID;
    const clanID = props.match.params.clanID;
    console.log(clanID);
    const uplateZaClana = props.uplatnice.filter((uplatnica: Uplatnica) => uplatnica.clan.clanId === clanID);

    return (
        <>
            <div className="container">
                <div className="row mb-3">
                    <Link to="/uplate/nova" className="button-big">KREIRAJ UPLATNICU</Link>
                </div>
                <div className="row mt-3">
                    <ListUplate uplatnice={uplateZaClana}/>
                </div>
            </div>
        </>
    );
}

export default Uplate;
