import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as action from '../../store/actions';
import './tabs.scss';
import Item from '../item/Item';

const Tabs = ({ arrayApi, sort_cheap_tickets, sort_time_fast_tickets, stop }) => {
  const [tickets, setTickets] = useState(false);

  const regulitorLeft = () => {
    sort_cheap_tickets(arrayApi, stop);
    setTickets(!tickets);
  };
  const regulitorRight = () => {
    sort_time_fast_tickets(arrayApi, stop);
    setTickets(!tickets);
  };

  return (
    <div>
      <div className="block_btn">
        <button className='btn btn_left' onClick={regulitorLeft} type="submit">
          Самый дешевый
        </button>
        <button className='btn btn_rigth' onClick={regulitorRight} type="submit">
          Самый быстрый
        </button>
      </div>
      <div>
        <Item tickets={tickets} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  arrayApi: state.arrayApi[0],
  stop: state.arrayApi.stop,
});

export default connect(mapStateToProps, action)(Tabs);

Tabs.defaultProps = {
  stop: false,
  arrayApi: [],
  sort_cheap_tickets: () => {},
  sort_time_fast_tickets: () => {},
};

Tabs.propTypes = {
  stop: PropTypes.bool,
  arrayApi: PropTypes.array,
  sort_cheap_tickets: PropTypes.func,
  sort_time_fast_tickets: PropTypes.func,
};
