import React from "react";
import ItemUplate from "../ItemUplate/ItemUplate";
import {Uplatnica} from "../../../modeli/Uplatnica";

const ListUplate = (props:any) => {
    if (props.uplatnice.length === 0) {
        return <div>
            <h2>No uplatnice found!</h2>
        </div>
    }
    return (
        <>
            {props.uplatnice.map((uplatnica: Uplatnica) => (
                <ItemUplate
                    key={uplatnica.uplatnicaId}
                    uplatnica={uplatnica}
                />
            ))}
        </>
    );
}

export default ListUplate;
