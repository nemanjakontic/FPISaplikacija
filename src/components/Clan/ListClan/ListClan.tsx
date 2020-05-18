import React from "react";
import ItemClan from "../ItemClan/ItemClan";
import {Clan} from "../../../modeli/Clan";

const ListClan = (props: any) => {
    if (props.clanovi.length === 0) {
        return <div>
            <h2>No users found!</h2>
        </div>
    }
    return (
        <>
            {props.clanovi.map((clan: Clan) => (
                    <ItemClan
                        key={clan.clanId}
                        clan={clan}
                    />
            ))}
        </>
    );
}

export default ListClan;
