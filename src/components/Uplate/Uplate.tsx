import React from "react";

import ListUplate from "./ListUplate/ListUplate";
import {Uplatnica} from "../../modeli/Uplatnica";

import './Uplate.css';
import {Link} from "react-router-dom";

const Uplate = (props: any) => {
    const UPLATNICE = [
        new Uplatnica('1', '22-05-2019', 1000, '1'),
        new Uplatnica('2', '23-06-2018', 900, '1'),
        new Uplatnica('3', '24-07-2017', 600, '2'),
        new Uplatnica('4', '25-08-2016', 300, '2'),
        new Uplatnica('5', '26-09-2015', 1200, '3')
    ];

    // const clanID = useParams().clanID;
    const clanID = props.match.params.clanID;
    console.log(clanID);
    const uplateZaClana = UPLATNICE.filter(uplatnica => uplatnica.clanID === clanID);

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
