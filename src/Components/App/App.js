import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import './App.scss';
import { connect } from 'react-redux';
import * as action from '../../store/actions';
import Filter from '../filter/filter';
import Tabs from '../tabs/tabs';
import icon from '../../Logo.svg';

function App({ requstTickets }) {
  const requestApi = () => {
    fetch('https://front-test.beta.aviasales.ru/search')
      .then((response) => response.json())
      .then((result) => localStorage.setItem('searchId', result.searchId));
  };

  // const requstBilet = () => {
  //   fetch(`https://front-test.beta.aviasales.ru/tickets?searchId=${localStorage.getItem('searchId')}`)
  //     .then((result) => result.json())
  //     .then((response) => {
  //       api_store(response.tickets);
  //       console.log(response.tickets);
  //     });
  // };

  useEffect(() => {
    requestApi();
    requstTickets();
  }, []);
  // requstBilet();

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
  requstTickets: state.arrayApi.requstTickets,
});

export default connect(mapStateToProps, action)(App);

App.defaultProps = {
  requstTickets: () => {},
};

App.propTypes = {
  requstTickets: PropTypes.func,
};
