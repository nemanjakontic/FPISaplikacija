import React from "react";
import Card from "react-bootstrap/Card";

const ItemUplate = (props:any) => {
    return (
        <>
            <div className="col-md-4 text-center mb-4 mt-4">
                <Card style={{width: '18rem', backgroundColor: '#F1AE5C'}} className="kartica senka">
                    <Card.Body>
                        <Card.Title>Uplatnica broj {props.uplatnica.uplatnicaId}</Card.Title>
                        <Card.Subtitle>{props.uplatnica.datumUplate}</Card.Subtitle>
                        <h4>Iznos uplate: {props.uplatnica.iznos}</h4>
                    </Card.Body>
                    <button className="button-big" onClick={() => props.show(props.uplatnica.uplatnicaId)}>PRIKAZI UPLATU</button>
                </Card>
            </div>
        </>
    );
}

export default ItemUplate;
