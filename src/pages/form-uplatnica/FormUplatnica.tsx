import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import './FormUplatnica.css';
import {Clan} from "../../modeli/Clan";

const FormUplatnica = (props: any) => {
    return (
        <Container>
            <Row>
               <Col md={{span: 6, offset: 3}}>
                   <form className="forma p-5">
                       <div className="form-group">
                           <label htmlFor="datumUplate">Datum uplate:</label>
                           <input type="text" id="datumUplate" className="form-control"/>
                       </div>
                       <div className="form-group">
                           <label htmlFor="clan">Clan:</label>
                           <select className="form-control" id="clan">
                               {props.clanovi.map((clan: Clan) => (
                                   <option key={clan.clanId}>{clan.clanId} - {clan.ime} {clan.prezime}</option>
                               ))}
                           </select>
                       </div>
                       <div className="form-group">
                           <label htmlFor="svrha">Svrha uplate:</label>
                           <textarea id="svrha" className="form-control"/>
                       </div>
                       <div className="form-group">
                           <label htmlFor="iznos">Iznos uplate:</label>
                           <input type="number" id="iznos" className="form-control"/>
                       </div>
                       <button className="button">UPLATI</button>
                   </form>
               </Col>
            </Row>
        </Container>
    );
}

export default FormUplatnica;
