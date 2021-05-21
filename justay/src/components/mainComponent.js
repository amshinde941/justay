import React, { Component } from "react";
import Hostel from './hostelComp';
import Contact from './contactComp';
import Header from './headerComp';
import Home from './homeComp';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import Hosteldetail from "./hosteldetail";
import About from './aboutComp';
import { connect } from 'react-redux';
import { postFeedback, fetchHostels } from '../Redux/ActionCreater';
import { actions } from 'react-redux-form';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const mapStateToProps = state => {
  return {
    hostels: state.hostels,
  }
}

const mapDispatchToProps = (dispatch) => ({
  postFeedback:(feedback) =>dispatch(postFeedback(feedback)),
  fetchHostels: () => { dispatch(fetchHostels()) },
  resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },
})

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedHostel: null
    };
  }

  componentDidMount() {
    this.props.fetchHostels();
  }
  render() {

    const HostelWithId = ({ match }) => {
      return (
        <Hosteldetail selectedHostel={this.props.hostels.hostels.filter((hostel) => hostel.id === parseInt(match.params.hostelId, 10))[0]}
          isLoading={this.props.hostels.isLoading}
          errMess={this.props.hostels.errMess}
        />
      );
    }

    
    return (
      <div className="App">
        <Header />
        <TransitionGroup>
          <CSSTransition key={this.props.location.key} classNames="page" timeout={300}>
            <Switch>
              <Route path="/home" component={Home} />
              <Route exact path="/hostel" component={() => <Hostel hostels={this.props.hostels} />} />
              <Route path="/hostel/:hostelId" component={HostelWithId} />
              <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm} 
                                                                       postFeedback={this.props.postFeedback}/>} />
              <Route exact path="/aboutus" component={About}/>
              <Redirect to="/home" />
            </Switch>
          </CSSTransition>
        </TransitionGroup>
      </div>
    );
  }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

