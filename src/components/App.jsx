import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import { Switch, Route } from 'react-router-dom';
import NewTicketForm from './NewTicketForm';
import Error404 from './Error404';

export function App(){
  return(
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={TicketList} />
        <Route path='/NewTicket' component={NewTicketForm} />
        <Route component={Error404}/>
      </Switch>
    </div>
  );
}

export default App;