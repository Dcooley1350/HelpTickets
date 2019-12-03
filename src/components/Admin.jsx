import React from 'react';
import PropTypes from 'prop-types';
import TicketList from './TicketList';
import TicketDetail from './TicketDetail';
function Admin (props) {
    let optionalSelectedTicketContent = null;
    if (props.selectedTicket != null) {
        optionalSelectedTicketContent = <TicketDetail selectedTicket={props.selectedTicket} />;
    }

    return (  
        <div>
            {optionalSelectedTicketContent}
            <TicketList ticketList={props.ticketList} currentRouterPath={props.currentRouterPath} onSettingSelectedTicket={props.onSettingSelectedTicket}/> />
        </div>
    );
}

Admin.propTypes = {
    ticketList: PropTypes.array,
    currentRouterPath: PropTypes.string.isRequired
};
 
export default Admin;