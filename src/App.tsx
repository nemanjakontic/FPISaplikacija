import React from 'react';
import './App.css';
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom';

import Home from "./pages/Home/Home";
import Layout from "./components/Layout/Layout";
import Uplate from "./components/Uplate/Uplate";
import FormUplatnica from "./pages/form-uplatnica/FormUplatnica";
import {Clan} from "./modeli/Clan";
import {Uplatnica} from "./modeli/Uplatnica";

const App = () => {
    const CLANOVI = [
        new Clan('1', 'Nemanja', 'Kontic', '24-06-1997', 'https://pbs.twimg.com/media/Cjx5kpZUoAIqfAK.jpg'),
        new Clan('2', 'Sanja', 'Lukic', '02-03-1997', 'https://pbs.twimg.com/media/Cjx5kpZUoAIqfAK.jpg'),
        new Clan('3', 'Sofija', 'Milosevic', '30-12-1995', 'https://pbs.twimg.com/media/Cjx5kpZUoAIqfAK.jpg'),
        new Clan('4', 'Petar', 'Savic', '28-08-1998', 'https://pbs.twimg.com/media/Cjx5kpZUoAIqfAK.jpg'),
        new Clan('5', 'Milos', 'Nedeljkovic', '15-01-1994', 'https://pbs.twimg.com/media/Cjx5kpZUoAIqfAK.jpg'),
        new Clan('6', 'Marija', 'Jovcic', '30-12-1996', 'https://pbs.twimg.com/media/Cjx5kpZUoAIqfAK.jpg'),
        new Clan('7', 'Isidora', 'Pavlovic', '28-04-1995', 'https://pbs.twimg.com/media/Cjx5kpZUoAIqfAK.jpg')
    ];

    const UPLATNICE = [
        new Uplatnica(
            '1',
            '22-05-2019',
            1000,
            new Clan(
                '1',
                'Nemanja',
                'Kontic',
                '24-06-1997',
                'https://pbs.twimg.com/media/Cjx5kpZUoAIqfAK.jpg'
            ),
        ),
        new Uplatnica('2', '23-06-2018', 900, new Clan('1', 'Nemanja', 'Kontic', '24-06-1997', 'https://pbs.twimg.com/media/Cjx5kpZUoAIqfAK.jpg')),
        new Uplatnica('3', '24-07-2017', 600, new Clan('2', 'Sanja', 'Lukic', '02-03-1997', 'https://pbs.twimg.com/media/Cjx5kpZUoAIqfAK.jpg')),
        new Uplatnica('4', '25-08-2016', 300, new Clan('2', 'Sanja', 'Lukic', '02-03-1997', 'https://pbs.twimg.com/media/Cjx5kpZUoAIqfAK.jpg')),
        new Uplatnica('5', '26-09-2015', 1200, new Clan('3', 'Sofija', 'Milosevic', '30-12-1995', 'https://pbs.twimg.com/media/Cjx5kpZUoAIqfAK.jpg'))
    ];

    const onAddUplata = (uplata: Uplatnica) => {
        
    }

    return (
        <Router>
            <div>
                <Layout>
                    <Switch>
                        <Route path="/" render={() => (<Home clanovi={CLANOVI}/>)} exact/>
                        <Route path="/:clanID/uplate" render={() => (<Uplate uplatnice={UPLATNICE} />)} exact/>
                        <Route path="/uplate/nova" render={() => (<FormUplatnica clanovi={CLANOVI} onAddUplata={onAddUplata}/>)} exact/>
                        <Redirect to="/"/>
                    </Switch>
                </Layout>
            </div>
        </Router>
    );
}

export default App;
