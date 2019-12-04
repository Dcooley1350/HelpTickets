import React from 'react';
import PropTypes from 'prop-types';
import Moment from 'moment';
import { connect } from 'react-redux';
function Ticket(props){
    console.log(props);
    function onSettingSelectedTicket(ticketId) {
        const { dispatch } = props;
        const action = {
            type: 'SELECT_TICKET',
            ticketId: ticketId
        }
        dispatch(action);
    }
    const ticketInformation = 
        <div>
            <h3>{props.location} - {props.names}</h3>
            <p>Time Open: {props.formattedWaitTime}</p>
            <hr/>
        </div>;
    if(props.currentRouterPath == '/Admin')
        return (<div onClick={() => { onSettingSelectedTicket(props.id); }}>
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
    formattedWaitTime: PropTypes.string,
    currentRouterPath: PropTypes.string
};

export default connect()(Ticket);