import React, { useState} from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import './FormUplatnica.css';
import {Clan} from "../../modeli/Clan";
import {Uplatnica} from "../../modeli/Uplatnica";

const FormUplatnica = (props: any) => {
    let [datumUplate, setDatumUplate] = useState<string>('');
    let [clan, setClan] = useState<Clan | null>(null);
    let [svrhaUplate, setSvrhaUplate] = useState<string>('');
    let [iznosUplate, setIznosUplate] = useState<number>(0);

    const onChangeClanHandler = (event: any) => {
        let obj = JSON.parse(event.target.value);
        setClan(obj);
    }

    const onAddUplataHandler = (e: any) => {
        e.preventDefault();
        console.log(datumUplate + " " + clan?.ime + " " + clan?.prezime + " " + svrhaUplate + " " + iznosUplate);
        if(datumUplate !== '' && clan !== null && svrhaUplate !== '') {
            props.onAddUplata(new Uplatnica('0', datumUplate, iznosUplate, clan));
        }
    }

    return (
        <Container>
            <Row>
               <Col md={{span: 6, offset: 3}}>
                   <form className="forma p-5">
                       <div className="form-group">
                           <label htmlFor="datumUplate">Datum uplate:</label>
                           <input
                               type="text"
                               id="datumUplate"
                               className="form-control"
                               value={datumUplate}
                               onChange={(e) => setDatumUplate(e.target.value)}
                           />
                       </div>
                       <div className="form-group">
                           <label htmlFor="clan">Clan:</label>
                           <select
                               className="form-control"
                               id="clan"
                               onChange={(e) => onChangeClanHandler(e)}
                           >
                               {props.clanovi.map((clan: Clan) => (
                                   <option
                                       key={clan.clanId}
                                       value={JSON.stringify(clan)}
                                   >{clan.clanId} - {clan.ime} {clan.prezime}</option>
                               ))}
                           </select>
                       </div>
                       <div className="form-group">
                           <label htmlFor="svrha">Svrha uplate:</label>
                           <textarea
                               id="svrha"
                               className="form-control"
                               value={svrhaUplate}
                               onChange={(e) => setSvrhaUplate(e.target.value)}
                           />
                       </div>
                       <div className="form-group">
                           <label htmlFor="iznos">Iznos uplate:</label>
                           <input
                               type="number"
                               id="iznos"
                               className="form-control"
                               value={iznosUplate}
                               onChange={(e) => setIznosUplate(Number.parseFloat(e.target.value))}
                           />
                       </div>
                       <button className="button" onClick={onAddUplataHandler}>UPLATI</button>
                   </form>
               </Col>
            </Row>
        </Container>
    );
}

export default FormUplatnica;
