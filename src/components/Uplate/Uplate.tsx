import React, {useState} from "react";

import ListUplate from "./ListUplate/ListUplate";
import {Uplatnica} from "../../modeli/Uplatnica";

import './Uplate.css';
import {Link} from "react-router-dom";
import DetailsUplata from "./DetailsUplata/DetailsUplata";
import Modal from "react-bootstrap/Modal";

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

    const [showModalUplata, setShowModalUplata] = useState<boolean>(false);
    const [uplataZaPrikaz, setUplataZaPrikaz] = useState<Uplatnica | null>(null);

    const clanID = props.match.params.clanID;
    const uplateZaClana = props.uplatnice.filter((uplatnica: Uplatnica) => uplatnica.clan.clanId === clanID);

    const showModal = (id: string) => {
        uplateZaClana.filter((uplatnica: Uplatnica) => uplatnica.uplatnicaId === id && setUplataZaPrikaz(uplatnica));
        setShowModalUplata(true);
        console.log("modal - id:" + id);
    }

    const handleClose = () => setShowModalUplata(false);

    return (
        <>
            <>
                <div className="container">
                    <div className="row mb-3">
                        <Link to="/uplate/nova" className="button-big">KREIRAJ UPLATNICU</Link>
                    </div>
                    <div className="row mt-3">
                        <ListUplate uplatnice={uplateZaClana} show={(id: string) => showModal(id)}/>
                    </div>
                </div>
            </>
            {/*<Modal show={showModalUplata}>*/}
            {/*    <DetailsUplata uplatnica={uplataZaPrikaz}/>*/}
            {/*</Modal>*/}

            <Modal show={showModalUplata} onHide={handleClose}>
                <DetailsUplata
                    uplatnica={uplataZaPrikaz}
                    handleClose={handleClose}
                    deleteUplata={(id: string) => {
                        props.delete(id);
                        handleClose();
                    }}
                />
            </Modal>
        </>
    );
}

export default Uplate;
