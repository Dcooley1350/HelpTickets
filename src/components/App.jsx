
import React from 'react';
import Header from './Header';
import TicketList from './TicketList';
import NewTicketControl from './NewTicketControl';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import Moment from 'moment';
import Admin from './Admin';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class App extends React.Component {
    // componentDidMount() {
    //     this.waitTimeUpdateTimer=setInterval(() => this.updateTicketElapsedWaitTime(),60000
    //     );}
    // componentWillUnmount(){
    //     clearInterval(this.waitTimeUpdateTimer);
    // }
    // updateTicketElapsedWaitTime() {
    //     let newMasterTicketList = this.state.masterTicketList.slice();
    //     newMasterTicketList.forEach((ticket) =>
    //         ticket.formattedWaitTime = (ticket.timeOpen).fromNow(true)
    //     );
    //     this.setState({ masterTicketList: newMasterTicketList });
    // }

    render() {
        return (
            <div>
                <Header />
                <Switch>
                    <Route exact path='/' render={() => <TicketList ticketList={this.props.masterTicketList} />} />
                    <Route path='/newticket' render={() => <NewTicketControl />} />
                    <Route path='/admin' render={(props) => <Admin currentRouterPath={props.location.pathname} />}/>
                    <Route component={Error404} />
                </Switch>
            </div>
        );
    }
    
}

const mapStateToProps = state => {
    return {
        masterTicketList: state.masterTicketList
    };
};

export default withRouter(connect(mapStateToProps)(App));