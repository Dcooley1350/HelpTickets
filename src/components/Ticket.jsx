import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
function Ticket(props){
  const ticketInformation = 
  <div>
      <h3>{props.location} - {props.names}</h3>
      <p>Time Open: {props.formattedWaitTime}</p>
      <hr/>
  </div>
  if(props.currentRouterPath == '/Admin')
    return (<div onClick={() => { props.onSettingSelectedTicket({ names: props.names, location: props.location, issue: props.issue, formattedWaitTime: props.formattedWaitTime }); }}>
      {ticketInformation}
      </div>        
  );
  else
      return (
        <div>
          {ticketInformation}
        </div>
      );
}

Ticket.propTypes = {
  names: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  issue: PropTypes.string,
  formattedWaitTime: PropTypes.string.isRequired,
  currentRouterPath: PropTypes.string.isRequired
};

export default Ticket;