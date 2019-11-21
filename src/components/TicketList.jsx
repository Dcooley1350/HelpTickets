import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';


function TicketList(props){
  console.log("ticketList router",props.currentRouterPath);
  return(
    <div>
      <h1>BOO{props.RouterPath}</h1>
      <hr/>
      {props.ticketList.map((ticket) =>
        <Ticket names={ticket.names}
          location={ticket.location}
          issue={ticket.issue}
          formattedWaitTime={ticket.formattedWaitTime}
          currentRouterPath={props.currentRouterPath}
          onSettingSelectedTicket={props.onSettingSelectedTicket}
          key={ticket.id}/>
      )}
    </div>

  );
}

TicketList.propTypes= {
  ticketList: PropTypes.array,
  currentRouterPath: PropTypes.string
};

export default TicketList;