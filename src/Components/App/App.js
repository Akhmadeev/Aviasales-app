import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './App.scss';
import { connect } from 'react-redux';
import * as action from '../../store/actions';
import Filter from '../filter/filter';
import Tabs from '../tabs/tabs';
import icon from './Logo.svg';

function App({ add_tickets, stop }) {

  const newArray = []; 

  const requestApi = () => {
    fetch('https://front-test.beta.aviasales.ru/search')
      .then((response) => response.json())
      .then((result) => localStorage.setItem('searchId', result.searchId));
  };

  function requestTickets() {
    fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${localStorage.getItem('searchId')}`)
      .then((result) => result.json())
      .then((response) => {
        if (!response.stop) requestTickets();
        newArray.push(response.tickets);
        add_tickets(newArray.flat(), response.stop);
      })
  }


  useEffect(() => {
    requestApi();
    requestTickets();
  }, []);


  if (!stop) requestTickets();

  return (
    <div className="app">
      <div className="icon">
        <img src={icon} alt="aviasales" />
      </div>
      <div className="menu">
        <Filter/>
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
