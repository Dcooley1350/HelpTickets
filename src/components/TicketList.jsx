import React from 'react';
import Ticket from './Ticket';
import PropTypes from 'prop-types';


function TicketList(props){
    console.log(Object.keys(props.ticketList)),
    console.log(props.ticketList);
    return(
        <div>
            <h1>BOO{props.currentRouterPath}</h1>
            <hr/>
            {Object.keys(props.ticketList).map(function(ticketId) {
                var ticket = props.ticketList[ticketId];
                return <Ticket names={ticket.names}
                  location={ticket.location}
                  issue={ticket.issue}
                  formattedWaitTime={ticket.formattedWaitTime}
                  currentRouterPath={props.currentRouterPath}
                  onSettingSelectedTicket={props.onSettingSelectedTicket}
                  id={ticketId}
                  key={ticketId}/>
            })}
        </div>

    );
}

TicketList.propTypes= {
    ticketList: PropTypes.object,
    currentRouterPath: PropTypes.string
};

export default TicketList;