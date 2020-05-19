import React from "react";

import './ItemClan.css';
import {Link} from "react-router-dom";

const ItemClan = (props: any) => {
    return (
        <>
            <div className="col-md-4 text-center mb-4">
                <div className="card kartica senka" style={{width: '18rem'}}>
                    <img src={props.clan.slika} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{props.clan.ime} {props.clan.prezime}</h5>
                            <h4 className="card-subtitle">{props.clan.datumRodjenja}</h4>
                        </div>
                        <Link to={`/${props.clan.clanId}/uplate`}><button className="button mb-1">UPLATE</button></Link>
                        <button className="button-two">POTVRDE</button>
                </div>
            </div>
        </>
    );
}

export default ItemClan;
