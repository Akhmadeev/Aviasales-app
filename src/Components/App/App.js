import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import './App.scss';
import { connect } from 'react-redux';
import * as action from '../../store/actions';
import Filter from '../filter/filter';
import Tabs from '../tabs/tabs';
import icon from './Logo.svg';
import Services from '../../Services';

function App({ add_tickets, stop }) {
  useEffect(() => {
    Services.requestApi();
    Services.requestTickets(add_tickets);
  }, []);

  if (!stop) Services.requestTickets(add_tickets);

  return (
    <div className="app">
      <div className="icon">
        <img src={icon} alt="aviasales" />
      </div>
      <div className="menu">
        <Filter />
        <Tabs />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  add_tickets: state.arrayApi.requestTickets,
  stop: state.arrayApi.stop,
});

export default connect(mapStateToProps, action)(App);

App.defaultProps = {
  add_tickets: () => {},
  stop: false,
};

App.propTypes = {
  add_tickets: PropTypes.func,
  stop: PropTypes.bool,
};
