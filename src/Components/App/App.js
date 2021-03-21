import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import './App.scss';
import { connect } from 'react-redux';
import * as action from '../../store/actions';
import Filter from '../filter/Filter';
import Tabs from '../tabs/Tabs';
import icon from '../icon/Logo.svg';
import Services from '../../services';

function App({ add_tickets,  get_id_session, id }) {

  const apiService = new Services();

  const newArray = [];

  function recursion() {
    return apiService
      .requestTickets(id)
      .then((response) => {
        newArray.push(response.tickets);
        add_tickets(newArray.flat(), response.stop);
        if (!response.stop) return recursion();
        return newArray;
      })
      .catch(() => recursion());
  }
  
  useEffect(() => {
    apiService.requestApi().then((result) => {
      get_id_session(result.searchId);
    });
  }, []);

  useEffect(() => {
    if(id) recursion();
  }, [id])


  return (
    <div className="app">
      <div className="icon">
        <img src={icon} alt="aviasales" />
      </div>
      <div className="menu">
        <Filter />
        <Tabs/>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  add_tickets: state.arrayApi.requestTickets,
  arrayApi: state.arrayApi,
  id: state.id,
});

export default connect(mapStateToProps, action)(App);

App.defaultProps = {
  add_tickets: () => {},
  get_id_session: () => {},
  id: '',
};

App.propTypes = {
  add_tickets: PropTypes.func,
  get_id_session: PropTypes.func,
  id: PropTypes.string,
};
