import React from "react";

import './DetailsUplata.css';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const DetailsUplata = (props: any) => {
    return (
        <>
            <Modal.Header closeButton>
                <Modal.Title>
                    Uplatnica broj {props.uplatnica.uplatnicaId} - {props.uplatnica.clan.ime} {props.uplatnica.clan.prezime}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>DATUM UPLATE: {props.uplatnica.datumUplate}</h4>
                <h4>IZNOS UPLATE: {props.uplatnica.iznos} RSD</h4>
            </Modal.Body>
            <Modal.Footer>
                <Button className="button" onClick={props.handleClose}>
                    EDIT
                </Button>
                <Button className="button-two" onClick={() => props.deleteUplata(props.uplatnica.uplatnicaId)}>
                    DELETE
                </Button>
            </Modal.Footer>
        </>
    );
}

export default DetailsUplata;
